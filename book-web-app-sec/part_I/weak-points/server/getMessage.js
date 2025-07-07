const session = require('./session');

/* 
 * Requests a message from the server, validates permissions, and if
 * successful pulls the message from the database and then returns the
 * message to the user requesting it via the client.
 */

const getMessage = function(req, res) {
    if (!req.body.token) { return res.sendStatus(401); }
    if (!req.body.messageId) { return res.sendStatus(400); }

    session.requestMessage(req.body.token, req.body.messageId).then((msg) => {
        return res.send(msg);
    })
    .catch((err) => {
        return res.sendStatus(400);
    });
}