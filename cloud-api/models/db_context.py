from flask_mongoengine import MongoEngine


db_context = MongoEngine()


def init_db_context(app):
    global db_context
    db_context.init_app(app)
