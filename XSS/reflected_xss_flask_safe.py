from flask import Flask, request
from html import escape

app = Flask(__name__)

@app.route("/search")
def home():
	query = request.args.get("q")
	escaped_query = escape(query)
	return f"You searched for: {escaped_query}!"

if __name__ == "__main__":
	app.run(debug=True)