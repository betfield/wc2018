import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import FixturesList from './FixturesList';

export default FixturesContainer = withTracker(( {fixtureId} ) => {
    const fixturesHandle = Meteor.subscribe('fixtures');
    const ready = fixturesHandle.ready();

    let fixtures = null;

    if (fixtureId) {
        fixtures = Fixtures.find({"_id": fixtureId}).fetch();
    } else {
        fixtures = Fixtures.find({}).fetch();
    }
    
    return {
        ready,
        fixtures
    };
})(FixturesList);