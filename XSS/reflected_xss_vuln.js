const express = require('express');
const app = express();

app.get('/search', function(req, res) {
	var searchTerm = req.query.q;
	res.send('You searched for: ' + searchTerms);
});

app.listen(80)