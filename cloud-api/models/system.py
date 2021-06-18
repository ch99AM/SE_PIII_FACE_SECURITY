from flask_mongoengine import MongoEngine
from database.db_context import db_context

class System(db_context.Document):
    idArea = db_context.IntField()
    code = db_context.StringField(unique=True)
    state = db_context.BooleanField()