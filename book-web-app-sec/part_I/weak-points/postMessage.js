const saveMessage = require('./saveMessage');

/*
 * Receives the data from send.js on the client, validating the user's
 * permissions and saving the provided message in the database if all
 * validation checks complete.
 * 
 * Returns HTTP status code 200 if successful.
 */

const postMessage = function(req, res) {
    if (!req.body.token || !req.body.target || !req.body.message) {
        return res.sendStatus(400);
    }
    saveMessage(req.body.token, req.body.target, req.body.message).then(() => {
        return res.sendStatus(200);
    })
        .catch((err) => {
        return res.sendStatus(400);
    });
};