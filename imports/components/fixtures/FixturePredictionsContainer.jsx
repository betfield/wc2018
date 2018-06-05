import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import FixturePredictions from './FixturePredictions';

export default FixturesContainer = withTracker(( {fixtureId} ) => {
    const predictionsHandle = Meteor.subscribe('fixturePredictions', fixtureId);
    const fixtureHandle = Meteor.subscribe('fixtures');
    const usersHandle = Meteor.subscribe('registeredUsers');

    const fixturesReady = fixtureHandle.ready();

    const predictions = Predictions.find({"fixture._id": fixtureId}).fetch();
    const fixture = Fixtures.findOne({"_id": fixtureId});
    const users = Meteor.users.find({}).fetch();

    return {
        fixture,
        fixturesReady,
        users,
        predictions
    };
})(FixturePredictions);