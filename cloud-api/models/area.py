from flask_mongoengine import MongoEngine
from models.db_context import db_context

class Area(db_context.Document):
    idUser = db_context.IntField()
    name = db_context.StringField()
    address = db_context.StringField()
    state = db_context.BooleanField()