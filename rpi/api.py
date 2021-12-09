
from helpers import device_restart, device_shutdown, is_rpi, get_commit
from helpers import get_device_id, network_conf, scan_wifi
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import logging


app = Flask(__name__)
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)
CORS(app)
app.config['SECRET_KEY'] = 'secret'

port = 9999


def send_json(object):
    response = make_response(jsonify(object), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/')
def index():
    return "... control server running on port %s" % port


@app.route('/network/save', methods=['POST'])
def setNetwork():
    credentials = request.get_json()
    network_conf(credentials['ssid'], credentials['pass'])
    return send_json({"message": True})


@app.route('/device/id')
def getDeviceId():
    return send_json({"id": get_device_id()})


@app.route('/git/commit')
def getCommit():
    return send_json({"commit": get_commit()})


@app.route('/network/scan')
def getNetworkCardList():
    return send_json({"networks": scan_wifi()})


@app.route('/shutdown', methods=['POST'])
def poweroff_endpoint():
    device_shutdown()
    return send_json({"message": True})


@app.route('/restart', methods=['POST'])
def restart_endpoint():
    device_restart()
    return send_json({"message": True})


app.run(host='0.0.0.0', debug=False, port=port)
