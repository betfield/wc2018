import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Portal from '../../imports/portal/Portal';

export default PortalContainer = withTracker(() => {
  const usersHandle = Meteor.subscribe('currentUser');
  const ready = usersHandle.ready();
  const currentUser = Meteor.user();
  
  return {
    ready,
    currentUser
  };
})(Portal);
