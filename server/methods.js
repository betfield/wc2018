Meteor.publish('users', function(filter) {
	var self = this;
    
    Meteor._sleepForMs(2000);

    var subHandle = Users.find(filter || {}).observeChanges({
        added: function(id, fields) {
            self.added("users", id, fields);
        },
        changed: function(id, fields) {
            self.changed("users", id, fields);
        },
        removed: function(id) {
            self.removed("users", id);
        }
    });
       
    self.ready();
    
    self.onStop(function () {
        subHandle.stop();
    });
});

Meteor.startup(function() {
    process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;

    console.log("Mongo url: ", process.env.MONGO_URL);
    console.log("MAIL url: ", process.env.MAIL_URL);
});

Meteor.methods({
    sendEmail: function (subject, text) {
        check([subject, text], [String]);
        let mailSent;
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        
        try {
            console.log("Sending mail..");
            console.log("Subject: ", subject);
            console.log("Text: ", text);

            this.unblock();
            
            Email.send({
                to: 'info@fctwister.ee',
                from: 'admin@fctwister.ee',
                subject: subject,
                text: text
            });
            
            console.log("Sending mail successful!");
        } catch (err) {
            console.log("Sending mail failed!", "Subject:" + subject, "Text: " + text);
            console.log(err.stack);
            throw new Meteor.Error("sending-failed",  "Sending mail failed!", "[Email] Subject:" + subject + "; [Email] Text: " + text);
        }

    }
});
