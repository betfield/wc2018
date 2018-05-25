import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PredictionList from './PredictionList';

export default PredictionsContainer = withTracker(() => {
    const predictionsHandle = Meteor.subscribe('predictions');
    const ready = predictionsHandle.ready();
    const predictions = Predictions.find({}).fetch();

    return {
        ready,
        predictions
    };
})(PredictionList);