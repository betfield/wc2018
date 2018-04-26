UserRoles = {
	admin: 'Administraator',
	regular: 'Registreerimata',
	registered: 'Registreeritud'
};


// Add roles after initial user creation
// Requires matb33:collection-hooks
Meteor.users.after.insert(function (userId, doc) {
	try {
		if (doc.profile.email == Meteor.settings.private.BF_EMAIL) {
			Roles.addUsersToRoles(doc._id, [UserRoles.admin]);
		} else {
			Roles.addUsersToRoles(doc._id, UserRoles.regular);
		}
		
		console.log("User created with id:" + doc._id + "AND with role(s): " + Roles.getRolesForUser(doc._id));
		
	} catch (e) {
		console.log("Error adding roles to user: ", e.message);
	}
	
});

Accounts.onCreateUser(function (options,user) {
	var service = user.services;
	var profile;
	
	if (service.facebook) {
		profile = {
			picture: "https://graph.facebook.com/" + service.facebook.id + "/picture",
			email: service.facebook.email,
			name: service.facebook.name
		};
	} else if (service.google) {
		profile = {
			picture: service.google.picture,
			email: service.google.email,
			name: service.google.name
		};
	} else if (service.twitter) {
		profile = {
			picture: service.twitter.profile_image_url_https,
			email: "", //Twitter API does not allow querying for email
			name: service.twitter.screenName
		};
	}
	
	// set default team name to social network user name
	profile["team"] = profile.name;
	
	// append profile to Meteor user
	user.profile = profile;
	
	if (user.profile.email != Meteor.settings.private.BF_EMAIL) {
		Meteor.call("createUserPredictions", user._id);
		console.log("Regular user prediction data added");
	}
	
	return user;
});