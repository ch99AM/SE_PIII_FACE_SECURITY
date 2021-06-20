from flask import Blueprint
from flask import request
import controllers.login as login_controller


login_routes = Blueprint("login_routes", __name__)


@login_routes.route("/")
def login():
    body = request.json
    answer = login_controller.login(body)
    return answer
