import { Meteor } from 'meteor/meteor';
import { logger } from './helpers/logger';

// Run this when the meteor app is started
Meteor.startup(function () {
	process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;

	//Define logger object
	Log = logger;
	Log.info("Mongo url: " + process.env.MONGO_URL);
	Log.info("MAIL url: " + process.env.MAIL_URL);

	function getUserId() {
		var user = Meteor.userId();
				
		if (user == null || typeof user == 'undefined') {
			user = 'anonymous';
		}
		
		return user;
	}
	
	/*
	Meteor.call("updateFixtureStatuses");
	
	var everyHour = new Cron(function() {
		console.log("Running Fixture status update:");
		Meteor.call("updateFixtureStatuses");
	}, {
		minute: 0
	});
	*/
});

