from flask import Flask

# create an instance of the flask class representing the application
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<html><head><title>Greeting</title></head><body><h1>Hello, World!</h1></body></html>'

# this checks if the program is being run as a module or the main program
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)

