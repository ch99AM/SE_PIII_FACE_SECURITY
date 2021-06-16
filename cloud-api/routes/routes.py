from flask import Flask
from routes.request import request_routes
from routes.access import access_routes
from routes.area import area_routes
from routes.login import login_routes
from routes.system import system_routes
from routes.user import user_routes

app = Flask(__name__)


app.register_blueprint(request_routes, url_prefix='/api/request')
app.register_blueprint(access_routes, url_prefix='/api/access')
app.register_blueprint(area_routes, url_prefix='/api/area')
app.register_blueprint(login_routes, url_prefix='/api/login')
app.register_blueprint(system_routes, url_prefix='/api/system')
app.register_blueprint(user_routes, url_prefix='/api/user')

for rule in app.url_map.iter_rules():
    print(rule)

@app.route("/api")
def hello():
    return "Hello world from flask!"


def run_api_server():
    app.run(host='127.0.0.1', port=3435)
