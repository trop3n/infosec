def oauth_login(request):
    app = Application.objects.get(name="CoffeeApp")
    redirect_uri = request.GET.get("redirect_uri",
                                   "http://bistro.thm:8000/oauthdemo/callback")
    
    authorization_url = (f"http://coffee.thm:8000/o/authorize/?client_id={app.client_id}&response_type=code&redirect_uri={redirect_uri}")
    return redirect(authorization_url)