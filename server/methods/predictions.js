Meteor.methods({
	createUserPredictions: function( userId ) {
		check( userId, String );
		
		var fixtures = Fixtures.find({}, {fields: {"_id": 1}}).fetch();
		
		return fixtures.forEach(function(fixture) {
			fixture["userPoints"] = 0;
			fixture["result"] = { home_goals: "", away_goals: "" }

			var prediction = {"userId": userId, "fixture": fixture};
			Predictions.insert( prediction );
		});
	},
	updateUserPredictions: function(fixture,homeScore,awayScore,userId) {
		check( fixture, String );
		check( homeScore, String );
		check( awayScore, String );
		check( userId, String );
		
		// Check if logged in as admin and update the actual fixture result if so
		if (Roles.userIsInRole(userId, ['Administraator'])) {

			console.log(isNaN(parseInt(homeScore)));

			if (!isNaN(parseInt(homeScore)) && !isNaN(parseInt(awayScore))) {
				Fixtures.update({"_id": fixture}, {$set: {"result.home_goals": homeScore, "result.away_goals": awayScore, "status": "FT"}});
				return Meteor.call("updateAllUsersPredictionPoints", fixture, function(error, result){
					if (error) {
						console.log("Update of points failed for user: " + userId);
					} 
				});
			}
			return;
		} else { // If not admin, update user's prediction result
			
			//Check if fixture is locked and only update prediction if not
			const locked = Fixtures.findOne({"_id": fixture}, {fields: {"locked": 1}}).locked;
		
			if (!locked) {
				return Predictions.update({"userId": userId, "fixture._id": fixture}, {$set: {"fixture.result.home_goals": homeScore, "fixture.result.away_goals": awayScore}});
			} else {
				console.log("Fixture " + fixture + " locked! Cannot update prediction for user " + userId);
				return;
			}
		}
	},
	checkRoundEnabled: function(fixture) {
		check( fixture, String );
		
		var roundFixtures = Fixtures.find({"round": Fixtures.findOne({"_id": fixture}).round}).fetch();
		
		function orderByDate(arr, dateProp) {
			return arr.slice().sort(function (a, b) {
				return a[dateProp] < b[dateProp] ? -1 : 1;
			});
		}
		
		var firstRoundFixtureDate = orderByDate(roundFixtures, "ts")[0].ts;
		var currentDate = new Date();
		// adjust current date to ET timezone
		currentDate.setTime(currentDate.getTime() + (Meteor.settings.private.TZ_HOURS*60*60*1000));
		
		if (Meteor.settings.private.TEST_TIME) {
			currentDate = new Date(Meteor.settings.private.TEST_TIME);
		}
		
		return (firstRoundFixtureDate < currentDate.toISOString());
	},
	updateFixtureStatuses: function() {
		var rounds = 7;
		var roundFixtures = [];
		
		function orderByDate(arr, dateProp) {
			return arr.slice().sort(function (a, b) {
				return a[dateProp] < b[dateProp] ? -1 : 1;
			});
		}
		
		var currentDate = new Date();
		// adjust current date -1h in ET timezone
		currentDate.setTime(currentDate.getTime() + (Meteor.settings.private.TZ_HOURS*60*60*1000));
		
		if (Meteor.settings.private.TEST_TIME) {
			currentDate = new Date(Meteor.settings.private.TEST_TIME);
		}

		console.log("Current: ", currentDate.toISOString());

		for (i = 0; i < rounds; i++) {
			var round = i+1; 
			roundFixtures[i] = Fixtures.find({"round": round}).fetch();
			
			var firstRoundFixtureDate = orderByDate(roundFixtures[i], "ts")[0].ts;
			
			console.log("Round start: ", firstRoundFixtureDate);
			
			if (firstRoundFixtureDate > currentDate.toISOString()) {
				console.log("Predictions enabled");
				Fixtures.update({"round": round}, {$set: {"status": "enabled"}}, {multi: true});
			} else {
				console.log("Predictions disabled");
				Fixtures.update({"round": round}, {$set: {"status": "disabled"}}, {multi: true});
				Meteor.call("removeRegularUserRoundPredictions", round, function(){});
			}
		}
	},
	removeRegularUserRoundPredictions: function(round) {
		var regularUsers = Meteor.users.find({"roles": "regular-user"}).fetch();
		var i = 0;

		regularUsers.forEach(function(user){
			console.log("Update for user: " + user._id + ", round: " + round);
			var regularUserPredictions = Predictions.update({"userId": user._id, "fixture.round": round}, {$set: {"fixture.result.homeGoals": "", "fixture.result.awayGoals": ""}}, {multi: true});
			
			i++;
		});
		  
		console.log("Regular user predictions removed. Count: ", i);
	}			
});	