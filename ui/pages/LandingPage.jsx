import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Landing from '../../imports/landing/Landing';

export default LandingPage = withTracker(() => {
  const usersHandle = Meteor.subscribe('users');
  const ready = usersHandle.ready();
  const users = Meteor.users.find().count();
  return {
    ready,
    users
  };
})(Landing);