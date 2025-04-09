def oauth_logincsrf(request):
    app = Application.objects.get(name="ContactApp")
    redirect_uri = request.POST.get("redirect_uri", "http://coffee.thm/csrf/callbackcsrf.php")

    authorization_url = (
        f"http://coffee.thm:8000/o/authorize/?client_id={app.client_id}&response_type=code&redirect_uri={redirect_uri}"
    )
    return redirect(authorization_url)

def oauth_callbackflagcsrf(request):
    code = request.GET.get("code")

    if not code:
        return JsonResponse({'error': 'missing_code', 'details': 'Missing code parameter'}, status=400)
    
    if code:
        return JsonResponse({'code': code, 'Payload': 'http://coffee.thm/csrf/callbackcsrf.php?code='+code}, status=400)