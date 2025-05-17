from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/hello')
def hello():
    #  user input s directly passed into the template rendering function without sanitization
    name = requests.args.get('name', 'World')
    return render_template_string(f'Hello, {name}')

if __name__ == "__main__":
    app.run(debug=True)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greeting Page</title>
</head>
<body>
    <h1>Hello, {{ name }}!</h1>
</body>
</html>