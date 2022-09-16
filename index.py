import numpy as np
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import pickle

# Create Flask App
app = Flask(__name__, static_folder="client/build", static_url_path="")
CORS(app)

# Load model
model = pickle.load(open("model.pkl", "rb"))

# Define routes
@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/api/predict", methods=["POST"])
@cross_origin()
def predict():
    sepal_length = request.json["sepal_length"]
    sepal_width = request.json["sepal_width"]
    petal_length = request.json["petal_length"]
    petal_width = request.json["petal_width"]

    features = np.array([[sepal_length, sepal_width, petal_length, petal_width]])
    prediction = model.predict(features)
    return prediction[0]


if __name__ == "__main__":
    app.run()
