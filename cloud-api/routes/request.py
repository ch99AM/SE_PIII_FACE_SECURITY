from flask import Blueprint
from flask import request
import controllers.request as request_controller

request_routes = Blueprint("request_routes", __name__)


@request_routes.route("/byUser", methods=["GET"])
def get_by_user():
    body = request.json
    answer = request_controller.get_by_user(body)
    return "Get Users!"


@request_routes.route("/byArea", methods=["GET"])
def get_by_area():
    body = request.json
    answer = request_controller.get_by_area(body)
    return "Get Areas!"
