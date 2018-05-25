import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Calendar from './Calendar';

export default CalendarContainer = withTracker(() => {
    const fixturesHandle = Meteor.subscribe('fixtures');
    const ready = fixturesHandle.ready();
    const fixtures = Fixtures.find().fetch();

    return {
        ready,
        fixtures
    };
})(Calendar);