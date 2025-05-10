app.get('/comments', (req, res) => {
    let html = "<ul>";
    for (const comment of comments) {
      html += `<li>${comment}</li>`;
    }
    html += '</ul>';
    res.send(html);
  });