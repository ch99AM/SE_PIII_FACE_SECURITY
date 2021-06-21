from flask import Blueprint
from flask import request
import controllers.access as access_controller

access_routes = Blueprint("access_routes", __name__)


@access_routes.route("/getAccess/<int:userIdCard>&<areaCode>", methods=["GET"])
def get_access(userIdCard, areaCode):
    body = {
        "userIdCard": userIdCard,
        "areaCode": areaCode
    }

    answer = access_controller.get_access(body)
    return answer


@access_routes.route("/add", methods=["POST"])
def add_access():
    body = request.json
    answer = access_controller.add_access(body)
    return answer


@access_routes.route("/updateOutDatetime", methods=["PUT"])
def update_access():
    body = request.json
    answer = access_controller.update_out_datetime(body)
    return answer
