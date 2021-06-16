from flask import Blueprint

user_routes = Blueprint("user_routes", __name__)


@user_routes.route("/getUser", methods=["GET"])
def getUser():
    return "GetUser"


@user_routes.route("/getPhoto", methods=["GET"])
def getUserPhoto():
    return "GetUserPhoto"


@user_routes.route("/add", methods=["POST"])
def addUser():
    return "AddUser"


@user_routes.route("/update", methods=["PUT"])
def updateUser():
    return "updateUser"

@user_routes.route("/delete", methods=["DELETE"])
def updateUser():
    return "deleteUser"
