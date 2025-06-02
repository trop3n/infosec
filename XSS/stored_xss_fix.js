const sanitizeHTML = require('sanitize-html');

app.get('/comments', (req, res) => {
  let html = '<ul>';
  for (const comment of comments) {
    const sanitizedComment = sanitizeHTML(comment);
    html += `<li>${sanitizedComment}</li>`;
  }
  html += '</ul>'
  res.send(html);
});