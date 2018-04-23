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

/*
Meteor.publish('fixturePredictions', function(fixture) {
    check( fixture, String );
    if (Meteor.call("checkRoundEnabled", fixture)) {
	    return Predictions.find({"fixture._id": fixture});
    } else {
        return this.ready();
    }
});

Meteor.publish("registeredUsers", function () {
    return Meteor.users.find({$or: [{"roles": "regular-user"}, {"roles": "registered-user"}]}, {fields: {"profile": 1, "roles": 1}});
});

function getActiveMatchday() {
	var firstRoundFixtureDates = [
		{"ts": "2016-06-10T19:00:00", "round": 1},
		{"ts": "2016-06-15T13:00:00", "round": 2},
		{"ts": "2016-06-19T19:00:00", "round": 3},
		{"ts": "2016-06-25T13:00:00", "round": 4},
		{"ts": "2016-06-30T19:00:00", "round": 5},
		{"ts": "2016-07-6T19:00:00", "round": 6},
		{"ts": "2016-07-10T19:00:00", "round": 7}
	];

	var currentDate = new Date();
	// adjust current date to -1h from now
	currentDate.setTime(currentDate.getTime() - (1*60*60*1000));
	
	var roundDate;

	for (i = 6; i >= 0; i--) {
		roundDate = firstRoundFixtureDates[i];
		if (currentDate.toISOString() > roundDate.ts) {
			i = -1;
		}
	};

	return roundDate.round;
}


function getActiveMatchdayFixtures(md) {
	
	//"http://api.football-data.org/v1/soccerseasons/424/fixtures"
	HTTP.call( 'GET', 
				Meteor.settings.public.RESULTS_FEED_API + 
				Meteor.settings.public.RESULTS_FEED_ACTIVE_LEAGUE +
				"/fixtures", 
		{
			headers: {
				"X-Auth-Token": Meteor.settings.private.RESULTS_FEED_KEY
			},
			params: {
				"matchday": md
			}
		}, function( error, response ) {
			if ( error ) {
				console.log( error );
			} else {
				var fixtureSet = JSON.parse( response.content );
				
				
				
			}
		});
}

Meteor.startup(function() {
	getActiveMatchdayFixtures(getActiveMatchday());
});
*/
/*
Meteor.setInterval(function() {
	
}, (5*60*1000));	
*/