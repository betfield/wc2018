let initialPoints = {
	"round1": 	0, 
	"round2": 	0, 
	"round3": 	0, 
	"round4": 	0, 
	"round5": 	0, 
	"round6": 	0, 
	"round7": 	0, 
	"total": 	0 
}

Meteor.methods({
	createUserPoints: function( user ) {
		check( user, Object );
		
		let userPoints = Points.find({"user._id": user._id});
		// Create initial points object
		if (userPoints.count() == 0) {
			points = initialPoints;
			points["user"] = user.userProfile;
			points.user["_id"] = user._id;
			points.user["pos"] = "-";
			Points.insert(points);
		} 
	},

	updateUserToRegistered: function(userId) {
		check(userId, String);

		if (Roles.userIsInRole(userId, ['Aktiveerimata'])) {

			Roles.addUsersToRoles(userId, ['Aktiveeritud']);
			Roles.removeUsersFromRoles(userId, 'Aktiveerimata');

			let user = Meteor.users.findOne({"_id": userId});

			Meteor.call("createUserPoints", user, (error,result) => {
				if (error) {
					throw new Meteor.Error("create-points-failed", "Cannot create points for user " + userId);
				} else {
					Log.info("Updated to registered: " + userId);
				}
			});
		}
	},

	updateUserToDeleted: function(userId) {
		check(userId, String);

		if (Roles.userIsInRole(userId, ['Aktiveerimata'])) {

			Roles.addUsersToRoles(userId, ['Kustutatud']);
			Roles.removeUsersFromRoles(userId, 'Aktiveerimata');

			Predictions.remove({"userId": userId});
			Log.info("Predictions removed for user: " + userId);
		}
	},

	updateAllUsersPredictionPoints: function(fixtureId) {
		check(fixtureId, String );
		
		let predictions = Predictions.find({"fixture._id": fixtureId}).fetch();
		let fixture = Fixtures.findOne({"_id": fixtureId});

		Log.info("Updating points on fixture: " + fixtureId + ". Result: " + fixture.result.home_goals + ":" + fixture.result.away_goals);

		predictions.forEach(prediction => {
			let points = userFixturePoints(prediction.fixture.result, fixture.result);
			
			Log.info("Updating prediction points for user: " + prediction.userId + ", prediction: " + 
						prediction.fixture.result.home_goals + ":" + prediction.fixture.result.away_goals + ", points: " + points);

			Predictions.update({"_id": prediction._id}, {$set: {"fixture.userPoints": points}});

			// TODO: Update points for only this particular ficture
			updateUserPoints(prediction.userId);

			Log.info("Prediction points updated")
		});

		// Calculate table position changes
		Log.info("Updating table positions")
		updateTablePositions();

		Log.info("Points updated for fixture: " + fixtureId);
	},
});	

userFixturePoints = (userResult, fixtureResult) => {
	
	let home = parseInt(userResult.home_goals, 10);
	let away = parseInt(userResult.away_goals, 10);

	let fh = parseInt(fixtureResult.home_goals, 10);
	let fa = parseInt(fixtureResult.away_goals, 10);
	
	console.log("User: " + home + ":" + away + ", Actual: " + fh + ":" + fa );
	let points = 0;
	// check if user result valid

			// User has predicted the correct score (5p)
			if (home == fh && away == fa) {
				points = 5;
			} 
			// Check if the goal difference was correct (3p)
			else if ((home - away) == (fh - fa)) {
				points = 3;
			// User has predicted the correct outcome of the match (2p)
			} else if (((home - away) > 0 && (fh - fa) > 0) || 
							((home - away) < 0 && (fh - fa) < 0)) {
				points = 2;
			}

	return points;
}

updateUserPoints = (userId) => {
	check( userId, String );
	
	Log.info("Updating round totals for user: " + userId)

	let predictions = Predictions.find({"userId": userId}, {fields: {"fixture._id": 1, "fixture.userPoints": 1}}).fetch(); 
	let fixtures = Fixtures.find({}, {fields: {"_id": 1, "round": 1}}).fetch(); 

	let points = [0,0,0,0,0,0,0];

	fixtures.forEach(fixture => {
		let i = parseInt(fixture.round,10);
		let p = predictions.find(function(pred) {
			return pred.fixture._id == fixture._id;
		});

		points[i-1] += parseInt(p.fixture.userPoints,10);
	})
	
	let total = 0;

	points.forEach(function(p) {
		total += p;
	});

	Log.info("Total points for user: " + userId + ", values: " + points)
	Points.update({"user._id": userId}, {$set: {"round1": points[0], "round2": points[1], "round3": points[2], "round4": points[3], "round5": points[4], "round6": points[5], "round7": points[6], "total": total}});
}

updateTablePositions = () => {
	let users = Meteor.users.find({"roles": "Aktiveeritud"});
	let points = [];

	users.forEach(function(user){
		points.push(Points.findOne({"user._id": user._id}));	
	});
	
	points.sort(function (points1, points2) {
		if (points1.total == points2.total) {

			let correctScoresUser1 = Predictions.find({"userId": points1.user._id, "fixture.userPoints": 5}).count();
			let correctScoresUser2 = Predictions.find({"userId": points2.user._id, "fixture.userPoints": 5}).count();

			if (correctScoresUser1 == correctScoresUser2) {
				let correctGoalDifferenceUser1 = Predictions.find({"userId": points1.user._id, "fixture.userPoints": 3}).count();
				let correctGoalDifferenceUser2 = Predictions.find({"userId": points2.user._id, "fixture.userPoints": 3}).count();

				if (correctGoalDifferenceUser1 == correctGoalDifferenceUser2) {
					let groupScoreUser1 = points1.round1 + points1.round2 + points1.round3;
					let groupScoreUser2 = points2.round1 + points2.round2 + points2.round3;

					return groupScoreUser2 - groupScoreUser1;			
				} return correctGoalDifferenceUser2 - correctGoalDifferenceUser1;
			}
			else return correctScoresUser2 - correctScoresUser1;
		} else { 
			return points2.total - points1.total;
		}
	});

	let pos = 1;

	points.forEach(function(item) {
		Log.info("User: " +  item.user._id + ", points: " + item.total + ", pos: " + pos);
		Points.update({"user._id": item.user._id}, {$set: {"user.pos": pos}});
		pos++;
	});
}