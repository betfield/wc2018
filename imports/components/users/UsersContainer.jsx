import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import UserList from './UserList';

export default UsersContainer = withTracker(() => {
    const usersHandle = Meteor.subscribe('allUsers');
    const ready = usersHandle.ready();
    const users = Meteor.users.find({}).fetch();

    return {
        ready,
        users
    };
})(UserList);