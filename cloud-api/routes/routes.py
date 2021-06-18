from flask import Flask
from routes.request import request_routes
from routes.access import access_routes
from routes.area import area_routes
from routes.login import login_routes
from routes.system import system_routes
from routes.user import user_routes
import models.db_context as db_context

app = Flask(__name__)


app.register_blueprint(request_routes, url_prefix='/api/request')
app.register_blueprint(access_routes, url_prefix='/api/access')
app.register_blueprint(area_routes, url_prefix='/api/area')
app.register_blueprint(login_routes, url_prefix='/api/login')
app.register_blueprint(system_routes, url_prefix='/api/system')
app.register_blueprint(user_routes, url_prefix='/api/user')

# DB settings
app.config['MONGODB_SETTINGS'] = {
    'db': 'face_security_db',
    'host': 'localhost',
    'port': 27017
}


@app.route("/api")
def hello():
    return "Cloud platform to the embedded project!"


def run_api_server():
    db_context.init_db_context(app)
    app.run(host='127.0.0.1', port=3435)
