import {firstRoundFixtureDates, getActiveMatchday, orderByDate} from '../helpers/fixtures'

Meteor.methods({
    getFirstRoundFixtureDates: () => {
        return firstRoundFixtureDates;
    },
    getActiveMatchday: () => {
        return getActiveMatchday().round;
	},
    updateFixtureLockedStatuses: function() {
		const md = getActiveMatchday();
		
		let currentDate = new Date();
		let roundFixtures = [];
        
		if (Meteor.settings.env === "Sandbox" && Meteor.settings.private.TEST_TIME) {
			currentDate = new Date(Meteor.settings.private.TEST_TIME);
		}

		console.log("Current date: ", currentDate.toISOString());
		console.log("Current matchday: ", md.round);

		firstRoundFixtureDates.forEach(fd => {
			if (fd.round < md.round) {
				console.log("Running fixture lock update for round: ", fd.round);
				Fixtures.update({"round": fd.round}, {$set: {"locked": true}}, {multi: true});
			}
		})
	}
});