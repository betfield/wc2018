Meteor.publish('points', function(filter) {
	let self = this;
	
	let subHandle = Points.find(filter || {}).observeChanges({
		added: function(id, fields) {
			self.added("points", id, fields);
		},
		changed: function(id, fields) {
			self.changed("points", id, fields);
		},
		removed: function(id) {
			self.removed("points", id);
		}
	});
		
	self.ready();
	
	self.onStop(function () {
		subHandle.stop();
	});
});

Meteor.publish('userPoints', function(user) {
	check(user, String);

	let data = [Points.find({"user._id": user})
				//TODO: Cannot publish full predictions table --- design needs to be revisited 
				//Predictions.find({"userId": user})
				];

	if ( data ) {
   		return data;
  	}

  	return this.ready();
});
