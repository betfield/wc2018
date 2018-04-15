import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import LandingPage from '../../ui/pages/LandingPage';

export default LandingPageContainer = withTracker(() => {
  const usersHandle = Meteor.subscribe('users');
  const ready = usersHandle.ready();
  const users = Users.find().count();
  return {
    ready,
    users
  };
})(LandingPage);