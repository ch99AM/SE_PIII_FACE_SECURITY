from flask import Blueprint
from flask import request
import controllers.user as user_controller

user_routes = Blueprint("user_routes", __name__)


@user_routes.route("/getUser/<int:id_card>", methods=["GET"])
def get_user(id_card):
    body = {
        "idCard": id_card
    }
    answer = user_controller.get_user(body)
    return answer


@user_routes.route("/getAdmin/<int:id_card>", methods=["GET"])
def get_admin(id_card):
    
    body = {
        "idCard": id_card
    }

    answer = user_controller.get_admin(body)
    return answer


@user_routes.route("/getConsultant/<int:id_card>", methods=["GET"])
def get_consultant(id_card):
    body = {
        "idCard": id_card
    }
    answer = user_controller.get_consultant(body)
    return answer


@user_routes.route("/getPhoto/<int:id_card>", methods=["GET"])
def get_user_photo(id_card):
    body = {
        "idCard": id_card
    }
    answer = user_controller.get_user_photo(body)
    return answer


@user_routes.route("/getAllUsers", methods=["GET"])
def get_all_users():
    body = request.json
    answer = user_controller.get_all_users()
    return answer


@user_routes.route("/add", methods=["POST"])
def add_user():
    body = request.json
    answer = user_controller.add_user(body)
    return answer


@user_routes.route("/addAdmin", methods=["POST"])
def add_admin():
    body = request.json
    answer = user_controller.add_admin(body)
    return answer


@user_routes.route("/addConsultant", methods=["POST"])
def add_consultant():
    body = request.json
    answer = user_controller.add_consultant(body)
    return answer


@user_routes.route("/update", methods=["PUT"])
def update_user():
    body = request.json
    answer = user_controller.update_user(body)
    return answer


@user_routes.route("/updateAdmin", methods=["PUT"])
def update_admin():
    body = request.json
    answer = user_controller.update_admin(body)
    return answer


@user_routes.route("/updateConsulant", methods=["PUT"])
def update_consultant():
    body = request.json
    answer = user_controller.update_consultant(body)
    return answer


@user_routes.route("/delete", methods=["DELETE"])
def delete_user():
    body = request.json
    answer = user_controller.delete_user(body)
    return answer


@user_routes.route("/deleteAdmin", methods=["DELETE"])
def delete_admin():
    body = request.json
    answer = user_controller.delete_admin(body)
    return answer


@user_routes.route("/deleteConsultant", methods=["DELETE"])
def delete_consultant():
    body = request.json
    answer = user_controller.delete_consultant(body)
    return answer
