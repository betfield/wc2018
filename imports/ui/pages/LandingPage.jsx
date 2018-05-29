import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Landing from '../layouts/Landing';

export default LandingPage = withTracker(() => {
  const usersHandle = Meteor.subscribe('registeredUsers');
  const currentUserHandle = Meteor.subscribe('currentUser');
  
  const usersCount = Meteor.users.find({roles: { "$in" : ["Aktiveeritud"]}}).count();
  const currentUser = Meteor.user();
  
  const ready = usersHandle.ready();
  
  return {
    ready,
    usersCount,
    currentUser
  };
})(Landing);