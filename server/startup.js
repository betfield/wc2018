import { Meteor } from 'meteor/meteor';
import { logger } from './helpers/logger';
import { getTimeToRegister } from './helpers/fixtures';

// Run this when the meteor app is started
Meteor.startup(function () {
	process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;

	//Define logger object
	Log = logger;
	Log.info("Mongo url: " + process.env.MONGO_URL);
	Log.info("MAIL url: " + process.env.MAIL_URL);
	
	//Define array for storing matchday locked statuses
	FixturesLocked = [];

	Meteor.setInterval(() => {
		Meteor.call("updateFixtureLockedStatuses")
	}, 60 * 1000);

});

