/*
Usage:

        logger.tag("first log from meteor", "custom_tag");
        logger.info("it will store this message with info tag");
        logger.error(JSErrorObject);
        logger.data("some message", JSONObject);

*/

const logger = {
    tag: (message, tag) => {
        try {
            Logger.log(message, tag);
        } catch (err) {
        }
    },
    error: (message, err) => {
        try {
            if (err && err !== null && err !== undefined) {
                Logger.error({
                    "error": err.message,
                    "trace": err.stack
                });
            }
        } catch (err) {
        }
    },
    info: (message) => {
        try {
            Logger.info(message);
        } catch (err) {
        }
    },
    data: (message, obj) => {
        try {
            Logger.trace({
                "message": message, 
                "object": obj
            });
        } catch (err) {
        }
    },
}

export { logger }