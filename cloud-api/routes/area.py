from flask import Blueprint
from flask import request
import controllers.area as area_controller

area_routes = Blueprint("area_routes", __name__)


@area_routes.route("/getArea/<codeArea>", methods=["GET"])
def get_area(codeArea):
    body = {
        "code": codeArea
    }
    answer = area_controller.get_area(body)
    return answer


@area_routes.route("/getAllAreas", methods=["GET"])
def get_all_areas(userIdCard):
    answer = area_controller.get_all_areas()
    return answer


@area_routes.route("/add", methods=["POST"])
def add_area():
    body = request.json
    answer = area_controller.add_area(body)
    return answer


@area_routes.route("/update", methods=["PUT"])
def update_area():
    body = request.json
    answer = area_controller.update_area(body)
    return answer


@area_routes.route("/delete", methods=["DELETE"])
def delete_area():
    body = request.json
    answer = area_controller.delete_area(body)
    return answer
