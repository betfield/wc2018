import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import App from '../../imports/App';

export default AppContainer = withTracker(() => {
  const usersHandle = Meteor.subscribe('users');
  const ready = usersHandle.ready();
  const users = Users.find().count();
  return {
    ready,
    users
  };
})(App);