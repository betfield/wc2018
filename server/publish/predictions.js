Meteor.publish('predictions', function(filter) {
	var self = this;
	var userId = this.userId;
	
	if (userId) {
		var subHandle = Predictions.find(filter || {"userId": userId}).observeChanges({
			added: function(id, fields) {
				self.added("predictions", id, fields);
			},
			changed: function(id, fields) {
				self.changed("predictions", id, fields);
			},
			removed: function(id) {
				self.removed("predictions", id);
			}
		});
			
		self.ready();
		
		self.onStop(function () {
			subHandle.stop();
		});
	} 
});

Meteor.publish('fixturePredictions', function(fixtureId) {
	let self = this;
	let subHandle = Predictions.find({"fixture._id": fixtureId}).observeChanges({
		added: function(id, fields) {
			self.added("predictions", id, fields);
		},
		changed: function(id, fields) {
			self.changed("predictions", id, fields);
		},
		removed: function(id) {
			self.removed("predictions", id);
		}
	});
		
	self.ready();
	
	self.onStop(function () {
		subHandle.stop();
	});
});

Meteor.publish('fixtureStatuses', function() {
    return Fixtures.find({}, {fields: {"_id": 1, "status": 1}});
});