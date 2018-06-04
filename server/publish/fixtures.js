// Publish all fixtures from the local DB
Meteor.publish('fixtures', function(filter) {
	var self = this;
	
	var subHandle = Fixtures.find(filter || {}).observeChanges({
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
		
	self.ready();
	
	self.onStop(function () {
		subHandle.stop();
	});
});
