import {firstRoundFixtureDates, getActiveMatchday, orderByDate} from '../helpers/fixtures'

Meteor.methods({
    getFirstRoundFixtureDates: () => {
        return firstRoundFixtureDates;
    },
    getActiveMatchday: () => {
        return getActiveMatchday().round;
	},
    updateFixtureLockedStatuses: function() {
		let rounds = 7;
		let roundFixtures = [];
		
        let currentDate = new Date();
        
        

		// adjust current date -1h in ET timezone
		currentDate.setTime(currentDate.getTime() + (Meteor.settings.private.TZ_HOURS*60*60*1000));
		
		if (Meteor.settings.private.TEST_TIME) {
			currentDate = new Date(Meteor.settings.private.TEST_TIME);
		}

		console.log("Current: ", currentDate.toISOString());

        /*

		for (i = 0; i < rounds; i++) {
			let round = i+1; 
			roundFixtures[i] = Fixtures.find({"round": round}).fetch();
			
			let firstRoundFixtureDate = orderByDate(roundFixtures[i], "ts")[0].ts;
			
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
        
        */
	},
});