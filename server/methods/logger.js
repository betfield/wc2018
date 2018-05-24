Meteor.methods({
    clientLog: function (message) {
        check(message, String);
        Log.tag(message, ['wc2018-client']);
    },
    clientError: function (message, errorObj) {
        check(message, String);
        check(errorObj, Object);

        errorObj.tag = ['wc2018-client'];

        Log.data(message, errorObj);
    }
});
