const session = require('./session');
const messageUtils = require('./messageUtils');

/*
 * Makes use of a util to request a single message via HTTP GET and then
 * appends it to the #message element with the author appended to the
 * #message-author element
 * 
 * If the HTTP request fails to retrieve a message, an error is logged to the console.
 */

const displayMessage = function(msgId) {
    messageUtils.getmessageById(session.token, msgId).then((msg) => {
        messageUtils.appendToDOM('#message', msg);
        messageUtils.appendToDOM('#message-author', msg.author);
    })
    .catch(() => console.log('an error occured'););
};