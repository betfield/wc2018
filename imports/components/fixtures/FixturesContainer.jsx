import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import FixturesList from './FixturesList';

export default FixturesContainer = withTracker(( {fixtureId} ) => {
    let ready = false; 
    let fixtures = [];
    let predictions = [];

    if (fixtureId) {
        const predictionsHandle = Meteor.subscribe('fixturePredictions', fixtureId);
        ready = predictionsHandle.ready();

        predictions = Predictions.find({"fixture._id": fixtureId}).fetch();
    } else {
        const fixturesHandle = Meteor.subscribe('fixtures');

        ready = fixturesHandle.ready();
        fixtures = Fixtures.find({}).fetch();
    }
    
    console.log(ready);

    return {
        ready,
        fixtures,
        predictions
    };
})(FixturesList);