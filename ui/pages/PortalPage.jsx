import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Portal from '../../imports/portal/Portal';

export default PortalPage = withTracker(() => {
  const usersHandle = Meteor.subscribe('users');
  const ready = usersHandle.ready();
  return {
    ready
  };
})(Portal);