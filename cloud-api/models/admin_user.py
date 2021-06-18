from flask_mongoengine import MongoEngine
from models.db_context import db_context

class AdminUser(db_context.Document):
    idUser = db_context.IntField()
    state = db_context.BooleanField()