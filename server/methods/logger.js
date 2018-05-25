Meteor.methods({
    clientLog: function (message) {
        check(message, String);
        Log.tag(message, ['client']);
    },
    clientError: function (message, obj) {
        check(message, String);
        check(obj, Object);

        const tag = '[error-client]';

        Log.data(message, tag, obj);
    }
});
