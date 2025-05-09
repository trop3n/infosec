const express = require('express');
const sanitizeHTML = require('sanitize-html');

const app = express();

app.get('/search', function(req, res) {
    const searchTerm = req.query.q;
    const sanitizedSearchTerm = sanitizeHTML(searchTerm);
    res.send('You searched for: ' + sanitizedSearchTerm);
});

app.listen(80)