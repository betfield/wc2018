//The table below has all fixture 1h earlier than the actual fixture start (in UTC)
const firstRoundFixtureDates = [
    {"ts": "2018-06-14T14:00:00Z", "round": 1},
    {"ts": "2018-06-19T17:00:00Z", "round": 2},
    {"ts": "2018-06-25T13:00:00Z", "round": 3},
    {"ts": "2018-06-30T13:00:00Z", "round": 4},
    {"ts": "2018-07-06T13:00:00Z", "round": 5},
    {"ts": "2018-07-10T17:00:00Z", "round": 6},
    {"ts": "2018-07-14T13:00:00Z", "round": 7}
];

//Register end date (in UTC)
const registerEnd = Meteor.settings.private.REGISTER_END;

// Return the active matchday 
const getActiveMatchday = () => {

    let currentDate = new Date();
    let roundElem = { round: 0 };

    firstRoundFixtureDates.some(elem => {
        roundElem = elem;
        return currentDate.toISOString() < elem.ts
    });

    return roundElem;
}

// Return true in case register deadline has passed
const isRegisterEnd = () => {

    const currentDate = new Date();
    const registerDate = new Date(registerEnd)

    return registerDate.getTime() < currentDate.getTime();
}

orderByDate = (arr, dateProp) => {
    return arr.slice().sort(function (a, b) {
        return a[dateProp] < b[dateProp] ? -1 : 1;
    });
}

export { firstRoundFixtureDates, getActiveMatchday, isRegisterEnd, orderByDate }