const id = new URLSearchParams(window.location.search).get("id");
fetch(`api/user/${id}`)
  .then(response => response.json())
  .then(data => renderProfile(data));