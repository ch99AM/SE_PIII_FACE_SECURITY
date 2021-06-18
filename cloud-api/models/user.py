from flask_mongoengine import MongoEngine
from models.db_context import db_context


class User(db_context.Document):
    name = db_context.StringField()
    firstLastName = db_context.StringField()
    secondLastName = db_context.StringField()
    cardID = db_context.IntField(required=True, unique=True)
    image = db_context.StringField(required=True)
