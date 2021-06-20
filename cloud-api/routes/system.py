from flask import Blueprint
from flask import request
import controllers.system as system_controller

system_routes = Blueprint("system_routes", __name__)


@system_routes.route("/getSystem", methods=["GET"])
def get_system():
    body = request.json
    answer = system_controller.get_system(body)
    return answer


@system_routes.route("/getAllSystems", methods=["GET"])
def get_all_systems():
    body = request.json
    answer = system_controller.get_all_systems()
    return answer


@system_routes.route("/add", methods=["POST"])
def add_system():
    body = request.json
    answer = system_controller.add_system(body)
    return answer


@system_routes.route("/update", methods=["PUT"])
def update_system():
    body = request.json
    answer = system_controller.update_system(body)
    return answer


@system_routes.route("/delete", methods=["DELETE"])
def delete_system():
    body = request.json
    answer = system_controller.delete_system(body)
    return answer
