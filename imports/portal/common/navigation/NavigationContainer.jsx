import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Navigation from './Navigation';

export default NavigationContainer = withTracker(() => {
  const usersHandle = Meteor.subscribe('users');
  const ready = usersHandle.ready();
  return {
    ready
  };
})(Navigation);
