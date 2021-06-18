from flask import Blueprint
from flask import request
import controllers.user as user_controller

user_routes = Blueprint("user_routes", __name__)


@user_routes.route("/getUser", methods=["GET"])
def get_user():
    body = request.json
    answer = user_controller.get_user(body)
    return answer


@user_routes.route("/getPhoto", methods=["GET"])
def get_user_photo():
    body = request.json
    answer = user_controller.get_user_photo(body)
    return answer


@user_routes.route("/add", methods=["POST"])
def add_user():
    body = request.json
    answer = user_controller.add_user(body)
    return answer


@user_routes.route("/update", methods=["PUT"])
def update_user():
    body = request.json
    answer = user_controller.update_user(body)
    return answer


@user_routes.route("/delete", methods=["DELETE"])
def delete_user():
    body = request.json
    answer = user_controller.delete_user(body)
    return answer
