import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import CalendarView from '../../imports/portal/calendar/CalendarView';

export default CalendarPage = withTracker(() => {
    const fixturesHandle = Meteor.subscribe('fixtures');
    const ready = fixturesHandle.ready();

    return {
        ready
    };
})(CalendarView);