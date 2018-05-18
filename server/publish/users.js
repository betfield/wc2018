Meteor.publish('registeredUsers', function(filter) {
    return Meteor.users.find({roles: { "$in" : ["Registreeritud"]}}, 
        {   
            fields: {  
                "userProfile.team": 1,
                "userProfile.picture": 1,
                "userProfile.name": 1,
                "roles": 1
            } 
        } 
    );
});

Meteor.publish('tableUsers', function(filter) {
	var self = this;
    
    var subHandle = Meteor.users.find(
        filter || {}, 
        { 
            fields: {  
                "userProfile.team": 1,
                "userProfile.picture": 1,
                "userProfile.name": 1,
                "roles": 1
            }
        } 
    );
       
    self.ready();
});

Meteor.publish('currentUser', function(filter) {
	var self = this;
    
    //Delay the publication to test loading spinner
    //Meteor._sleepForMs(2000);

    var subHandle = Meteor.users.find({_id: self.userId}, 
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
       
    self.ready();
    
    self.onStop(function () {
        subHandle.stop();
    });
});

Meteor.publish('allUsers', function(filter) {
	return Meteor.users.find(filter || {}, 
        { 
            fields: {  
                "userProfile.team": 1,
                "userProfile.picture": 1,
                "userProfile.name": 1,
                "roles": 1
            }
        } 
    );
});
