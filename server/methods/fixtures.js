//The table below has all fixture 1h earlier than the actual fixture start (in UTC)
let firstRoundFixtureDates = [
    {"ts": "2018-06-14T14:00:00Z", "round": 1},
    {"ts": "2018-06-19T17:00:00Z", "round": 2},
    {"ts": "2018-06-25T13:00:00Z", "round": 3},
    {"ts": "2018-06-30T13:00:00Z", "round": 4},
    {"ts": "2018-07-06T13:00:00Z", "round": 5},
    {"ts": "2018-07-10T17:00:00Z", "round": 6},
    {"ts": "2018-07-14T13:00:00Z", "round": 7}
];

// Publish all fixtures from the local DB
Meteor.methods({
    getFirstRoundFixtureDates: () => {
        return firstRoundFixtureDates;
    },
    getActiveMatchday: () => {

        let currentDate = new Date();
        let roundElem = { round: 0 };
    
        firstRoundFixtureDates.some(elem => {
            roundElem = elem;
            return currentDate.toISOString() < elem.ts
        });

        return roundElem.round;
    }
});

