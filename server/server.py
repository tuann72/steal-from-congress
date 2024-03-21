from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.route("/api", methods=["GET"])
def return_home():
    url = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True, port=8080)
