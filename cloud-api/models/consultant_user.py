from flask_mongoengine import MongoEngine
from models.db_context import db_context


class ConsultantUser(db_context.Document):
    idUser = db_context.IntField()
    state = db_context.BooleanField()
