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
