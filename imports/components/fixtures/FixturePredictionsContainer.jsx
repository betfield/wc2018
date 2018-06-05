import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import FixturePredictions from './FixturePredictions';

export default FixturesContainer = withTracker(( {fixtureId} ) => {
    const predictionsHandle = Meteor.subscribe('fixturePredictions', fixtureId);
    const fixtureHandle = Meteor.subscribe('currentMatchdayFixtures');
    const fixturesReady = fixtureHandle.ready();

    const predictions = Predictions.find({"fixture._id": fixtureId}).fetch();
    const fixture = Fixtures.findOne({"_id": fixtureId});

    return {
        fixture,
        fixturesReady,
        predictions
    };
})(FixturePredictions);