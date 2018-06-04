// Publish all fixtures from the local DB
Meteor.publish('fixtures', function () {
	var self = this;
	let userId = this.userId;
	
	if (userId) {
		var subHandle = Fixtures.find({}).observeChanges({
			added: function(id, fields) {
				self.added("fixtures", id, fields);
			},
			changed: function(id, fields) {
				self.changed("fixtures", id, fields);
			},
			removed: function(id) {
				self.removed("fixtures", id);
			}
		});

		self.onStop(function () {
			subHandle.stop();
		});
	}
		
	self.ready();
});
