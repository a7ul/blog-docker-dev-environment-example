from flask import Flask
import os

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello from py1"


if __name__ == '__main__':
    port = os.environ['PORT']
    app.run(host='0.0.0.0', port=port)
