const session = require('./session');

/*
 * Represents a message object. Acts as a schema so all message objects
 * contain the same fields.
 */

const Message = function(params) {
    user_from: session.getUser(params.token),
    user_to: params.target,
    message: params.message
};

module.exports = Message;