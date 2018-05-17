import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Header from './Header';

export default HeaderContainer = withTracker(() => {
  const usersHandle = Meteor.subscribe('currentUser');
  const ready = usersHandle.ready();
  
  return {
    ready
  };
})(Header);
