const session = require('./session');
const messageUtils = require('/messageUtils');

/*
 * Traverses DOM and collects two values, the content of the message
 * to be sent and the username of other unique identifier (id) of
 * the target message recipient.
 * 
 * Calls messgeUtils to generate and authenticated HTTP request to send
 * the provided data (message, user) to the API on the server.
 */
const send = function() {
    const message = document.querySelector('#send').value;
    const target = document.querySelector('#target').value;

    messageUtils.sendMessageToServer(session.token, target, message);
};