UserRoles = {
	admin: 'Administraator',
	regular: 'Registreerimata',
	registered: 'Registreeritud'
};


// Add roles after initial user creation
// Requires matb33:collection-hooks

/*
	Changes to default Meteor behavior:
	1) User entries in the Meteor.users collection gain a new field named roles corresponding to the user's roles. †
	2) A new collection Meteor.roles contains a global list of defined role names. ††
	3) The currently logged-in user's roles field is automatically published to the client.
*/
Meteor.users.after.insert(function (userId, doc) {
	try {
		if (doc.userProfile.email == Meteor.settings.private.BF_EMAIL) {
			Roles.addUsersToRoles(doc._id, [UserRoles.admin]);
		} else {
			Roles.addUsersToRoles(doc._id, UserRoles.regular);
		}
		
		console.log("User created with id:" + doc._id + "AND with role(s): " + Roles.getRolesForUser(doc._id));
		
	} catch (e) {
		console.log("Error adding roles to user: ", e.message);
	}
	
});

Accounts.onCreateUser(function (options, user) {
	var service = user.services;
	var userProfile;
	
	if (service.facebook) {
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
		Meteor.call("createUserPredictions", user._id);
		console.log("Regular user prediction data added");
	}
	
	return user;
});