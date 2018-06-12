// Publish current user's predictions
Meteor.publish('predictions', function () {
	let self = this;
	let userId = this.userId;
	
	if (userId) {
		var subHandle = Predictions.find({"userId": userId}).observeChanges({
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

		self.onStop(function () {
			subHandle.stop();
		});
	}

	self.ready();
});

// Publish all predictions for current fixture
Meteor.publish('fixturePredictions', function (fixtureId) {
	let self = this;
	let userId = this.userId;
	
	check(fixtureId, String);

	// Return result only if user is logged in and fixture is locked for editing
	// TODO: Remove unregistered (inactive) user results
	if (userId && fixtureIsLocked(fixtureId)) {
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

		self.onStop(function () {
			subHandle.stop();
		});
	}

	self.ready();
});

// Publish status info for all fixtures' locked state
Meteor.publish('fixtureLockedStatuses', function () {
	let self = this;
	let subHandle = Fixtures.find({}, {fields: {"_id": 1, "locked": 1}}).observeChanges({
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

fixtureIsLocked = (fixtureId) => {
	return Fixtures.findOne({"_id": fixtureId}, {fields: {"locked": 1}}).locked;
}