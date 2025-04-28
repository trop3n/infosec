var client_id = 'npmL7WDiRoOvjZoGSDiJhU2ViodTdygjW8rdabt7';
var redirect_uri = 'http://factbook.thm:8080/callback.php'; 
var auth_url = "http://coffee.thm:8000/o/authorize/";
var url = auth_url + "?response_type=token&client_id=" + client_id + "&redirect_uri=" + encodeURIComponent(redirect_uri);
window.location.href = url;