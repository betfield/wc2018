import {firstRoundFixtureDates, getActiveMatchday, orderByDate, isRegisterEnd} from '../helpers/fixtures'

Meteor.methods({
    getFirstRoundFixtureDates: () => {
        return firstRoundFixtureDates;
    },
    getActiveMatchday: () => {
        return getActiveMatchday();
	},
	getPreviousMatchday: () => {
		const md = getActiveMatchday().round;
		
		if (md > 1) {
			return firstRoundFixtureDates[md-2];
		} 
	},
	isRegisterEnd: () => {
		return isRegisterEnd();
	},
    updateFixtureLockedStatuses: function() {
		const md = getActiveMatchday();
		const previous = Meteor.call("getPreviousMatchday");

		let currentDate = new Date();
		let roundFixtures = [];
        
		if (Meteor.settings.env === "Sandbox" && Meteor.settings.private.TEST_TIME) {
			currentDate = new Date(Meteor.settings.private.TEST_TIME);
		}

		console.log("Current date: ", currentDate.toISOString());
		console.log("Current matchday: ", md.round);
		console.log("Current round deadline: ", md.ts);

		firstRoundFixtureDates.forEach(fd => {
			if (fd.round < md.round) {
				if (!FixturesLocked[fd.round]) {
					console.log("Running fixture lock update for round: ", fd.round);
					Fixtures.update({"round": fd.round}, {$set: {"locked": true}}, {multi: true});
					FixturesLocked[fd.round] = true;
				}
			}
		})
	}
});