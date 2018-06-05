// Get current user object
Meteor.publish('currentUser', function () {
	let self = this;
    
    //Delay the publication to test loading spinner
    //Meteor._sleepForMs(2000);
    let userId = this.userId;
	
	if (userId) {
        let subHandle = Meteor.users.find({"_id": userId}, 
            { 
                fields: {  
                    "userProfile.team": 1,
                    "userProfile.picture": 1,
                    "userProfile.name": 1,
                    "roles": 1
                }
            } 
        ).observeChanges({
            added: function(id, fields) {
                self.added("users", id, fields);
            },
            changed: function(id, fields) {
                self.changed("users", id, fields);
            },
            removed: function(id) {
                self.removed("users", id);
            }
        });

        self.onStop(function () {
            subHandle.stop();
        });
    }
       
    self.ready();
});

// Publish list of all registered (active) users
Meteor.publish('registeredUsers', function () {
    let self = this;
    let userId = this.userId;
	
	if (userId) {
        let subHandle = Meteor.users.find({roles: { "$in" : ["Aktiveeritud"]}}, 
            { 
                fields: {  
                    "userProfile.team": 1,
                    "userProfile.picture": 1,
                    "roles": 1
                }
            } 
        ).observeChanges({
            added: function(id, fields) {
                self.added("users", id, fields);
            },
            changed: function(id, fields) {
                self.changed("users", id, fields);
            },
            removed: function(id) {
                self.removed("users", id);
            }
        });

        self.onStop(function () {
            subHandle.stop();
        });
    }

    self.ready();
});

Meteor.publish('allUsers', function () {
    let self = this;

    if (Roles.userIsInRole(this.userId, ["Administraator"])) {

        let subHandle = Meteor.users.find({}, 
            { 
                fields: {  
                    "userProfile.team": 1,
                    "userProfile.picture": 1,
                    "userProfile.name": 1,
                    "roles": 1
                }
            } 
        ).observeChanges({
            added: function(id, fields) {
                self.added("users", id, fields);
            },
            changed: function(id, fields) {
                self.changed("users", id, fields);
            },
            removed: function(id) {
                self.removed("users", id);
            }
        });

        self.onStop(function () {
            subHandle.stop();
        });
    } 

    self.ready();
});
