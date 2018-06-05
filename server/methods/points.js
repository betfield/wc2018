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

	updateUserPoints: function(user) {
		check( user, String );
		
		let predictions = Predictions.find({"userId": user}).fetch(); 
		let points = [0,0,0,0,0,0,0];

		predictions.forEach(function(prediction){
			let i = parseInt(prediction.fixture.round,10);
			points[i-1] += parseInt(prediction.fixture.userPoints,10);
		})
		
		let total = 0;

		points.forEach(function(p) {
			total += p;
		});

		Points.update({"user._id": user}, {$set: {"round1": points[0], "round2": points[1], "round3": points[2], "round4": points[3], "round5": points[4], "round6": points[5], "round7": points[6], "total": total}});
	},
	updateAllUsersPredictionPoints: function(fixtureId) {
		check(fixtureId, String );
		
		let predictions = Predictions.find({"fixture._id": fixtureId}).fetch();
		let fixture = Fixtures.findOne({"_id": fixtureId});
		console.log("Fixture: ", fixture);

		predictions.forEach(function(prediction) {
			console.log("Updating prediction points for user: " + prediction.userId + " on fixture: " + prediction.fixture._id + " with result: " + prediction.fixture.result.homeGoals + ":" + prediction.fixture.result.awayGoals + ". Actual: ", fixture.result);
			
			let points = userFixturePoints(prediction.fixture.result, fixture.result);
			console.log(points);

			Predictions.update({"_id": prediction._id}, {$set: {"fixture.userPoints": points}});
			Meteor.call("updateUserPoints", prediction.userId);
		});

		// Calculate table position changes
		try {
			updateTablePositions();
		} catch (err) {
			console.log(err.stack);
		}

		console.log("User points updated for fixture: " + fixtureId);

	},

	updateUserToRegistered: function(userId) {
		check(userId, String);

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
});	

function updateTablePositions() {
	let users = Meteor.users.find({"roles": "Aktiveeritud"});
	let points = [];

	users.forEach(function(user){
		points.push(Points.findOne({"user._id": user._id}));	
	});
	
	console.log("Points initial: ", points);

	points.sort(function (points1, points2) {
		if (points1.total == points2.total) {

			let correctScoresUser1 = Predictions.find({"userId": points1.user._id, "fixture.userPoints": 5}).count();
			let correctScoresUser2 = Predictions.find({"userId": points2.user._id, "fixture.userPoints": 5}).count();

			console.log("User1: " + correctScoresUser1 + " User2: " + correctScoresUser2);

			if (correctScoresUser1 == correctScoresUser2) {
				let correctGoalDifferenceUser1 = Predictions.find({"userId": points1.user._id, "fixture.userPoints": 3}).count();
				let correctGoalDifferenceUser2 = Predictions.find({"userId": points2.user._id, "fixture.userPoints": 3}).count();

				console.log("User1: ", correctGoalDifferenceUser1, "User2: ", correctGoalDifferenceUser2);

				if (correctGoalDifferenceUser1 == correctGoalDifferenceUser2) {
					let groupScoreUser1 = points1.round1 + points1.round2 + points1.round3;
					let groupScoreUser2 = points2.round1 + points2.round2 + points2.round3;

					console.log("User1: ", groupScoreUser1, "User2: ", groupScoreUser2);

					return groupScoreUser2 - groupScoreUser1;			
				} return correctGoalDifferenceUser2 - correctGoalDifferenceUser1;
			}
			else return correctScoresUser2 - correctScoresUser1;
		} else { 
			console.log("Points1: " + points1.total + " Points2: " + points2.total);
			return points2.total - points1.total;
		}
	});

	console.log("Points after: ", points);

	let pos = 1;

	points.forEach(function(item) {
		Points.update({"user._id": item.user._id}, {$set: {"position": pos}});
		pos++;
	});
}

function userFixturePoints(userResult, fixtureResult) {
	
	let home = parseInt(userResult.homeGoals, 10);
	let away = parseInt(userResult.awayGoals, 10);

	let fh = parseInt(fixtureResult.homeGoals, 10);
	let fa = parseInt(fixtureResult.awayGoals, 10);
	
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