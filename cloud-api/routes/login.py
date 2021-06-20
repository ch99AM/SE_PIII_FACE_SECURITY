from flask import Blueprint
from flask import request

login_routes = Blueprint("login_routes", __name__)

@login_routes.route("/")
def login():
    body = request.json
    return "Login"