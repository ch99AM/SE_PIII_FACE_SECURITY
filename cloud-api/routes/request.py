from flask import Blueprint
from flask import request

request_routes = Blueprint("request_routes", __name__)


@request_routes.route("/byUser", methods=["GET"])
def getByUser():
    body = request.json
    return "Get Users!"


@request_routes.route("/byArea", methods=["GET"])
def getByArea():
    body = request.json
    return "Get Areas!"
