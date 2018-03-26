/*
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(function () {
	
	// Define global object with methods for logging 
	// info and error messages to Loggly
	logger = {
		log: function (msg) {	
			return Meteor.call('clientLog', msg, function(){});
		},
		error: function (msg, err) {	
			return Meteor.call('clientError', msg, err, function(){});
		}
	}

/*	console.log = function() {
		return logger.log(arguments);
	};

	var proxyOnError;

	console.error = function() {
  		return logger.error(arguments);
	};
	
	proxyOnError = window.onerror;

});

Template.login.events({
	'click #fb-login':function(event){
		Meteor.loginWithFacebook({}, function(err){
            if (err) {
				logger.error("Facebook login failed", err);
                throw new Meteor.Error("Facebook login failed");
            } else {
				logger.log("Facebook login succeeded");
				Router.go('root');
			}
        });
	}
});

Template.login.events({
	  'click #google-login': function(event){
    	Meteor.loginWithGoogle ({}, function (err){
      		if (err){
				logger.error("Google login failed", err);
        		throw new (Meteor.Error)("Google login failed");
	  		} else {
    			logger.log("Google login succeeded");
				Router.go('root');
	  		}
		});
	}
});

Template.login.events({
	  'click #tw-login': function(event){
    	Meteor.loginWithTwitter ({}, function (err){
      		if (err){
				logger.error("Twitter login failed", err);
        		throw new (Meteor.Error)("Twitter login failed");
	  		} else {
    			logger.log("Twitter login succeeded");
				Router.go('root');
	  		}
		});
	}
});
*/

/*
Template.user_logged_out.events({
	'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
				logger.error("Logout failed", err);
                throw new Meteor.Error("Logout failed");
            }
        });
	logger.log("User logged out");
	}
});

*/