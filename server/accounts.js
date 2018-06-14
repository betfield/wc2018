import {isRegisterEnd} from './helpers/fixtures'

UserRoles = {
	admin: 'Administraator',
	regular: 'Aktiveerimata',
	registered: 'Aktiveeritud'
};


// Add roles after initial user creation
// Requires matb33:collection-hooks

/*
	Changes to default Meteor behavior:
	1) User entries in the Meteor.users collection gain a new field named roles corresponding to the user's roles. †
	2) A new collection Meteor.roles contains a global list of defined role names. ††
	3) The currently logged-in user's roles field is automatically published to the client.
*/
Meteor.users.after.insert((userId, doc) => {
	try {
		if (doc.userProfile.email == Meteor.settings.private.BF_EMAIL) {
			Roles.addUsersToRoles(doc._id, [UserRoles.admin]);
			Log.info("Admin user created with id:" + doc._id);
		} else {
			Roles.addUsersToRoles(doc._id, UserRoles.regular);
			Log.info("Regular user created with id:" + doc._id);
		}
	} catch (e) {
		Log.error("Error adding roles to user: " + userId, e);
	}
	
});

Accounts.onCreateUser(function (options, user) {
	var service = user.services;
	var userProfile;
	
	if (isRegisterEnd()) {
		throw new Meteor.Error("register-ended", "Registreerimine lõppenud");
	}
	else if (service.facebook) {
		userProfile = {
			picture: "https://graph.facebook.com/" + service.facebook.id + "/picture",
			email: service.facebook.email,
			name: service.facebook.name
		};
	} else if (service.google) {
		userProfile = {
			picture: service.google.picture,
			email: service.google.email,
			name: service.google.name
		};
	} else if (service.twitter) {
		userProfile = {
			picture: service.twitter.profile_image_url_https,
			email: "", //Twitter API does not allow querying for email
			name: service.twitter.screenName
		};
	}
	
	// set default team name to social network user name
	userProfile["team"] = userProfile.name;
	
	// append profile to Meteor user
	user.userProfile = userProfile;
	
	if (user.userProfile.email != Meteor.settings.private.BF_EMAIL) {
		// Create prediction fields for new user
		createUserPredictions(user._id);
		Log.info("Prediction data added for user: " + user._id);
	}
	
	return user;
});

// Disable login of new and deleted users after register end
Accounts.validateLoginAttempt(function (options) {
	if (isRegisterEnd()) {
		const user = options.user;

		if (!user || user.roles.includes('Kustutatud')) {
			throw new Meteor.Error("register-ended", "Registreerimine lõppenud");
		}
	}
	return true;
});

createUserPredictions = ( userId ) => {
	let fixtures = Fixtures.find({}, {fields: {"_id": 1}}).fetch();
	
	return fixtures.forEach(fixture => {
		fixture["userPoints"] = 0;
		fixture["result"] = { 
			home_goals: "", 
			away_goals: "" 
		}

		const prediction = {
			"userId": userId, 
			"fixture": fixture
		};
		
		Predictions.insert( prediction );
	});
}