from flask_mongoengine import MongoEngine
from models.db_context import db_context


class Access(db_context.Document):
    idUsuario = db_context.IntField()
    idArea = db_context.IntField()
    inDateTime = db_context.DateTimeField()
    outDateTime = db_context.DateTimeField()
