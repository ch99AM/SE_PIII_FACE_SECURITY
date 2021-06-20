from flask_mongoengine import MongoEngine
from models.db_context import db_context
from models.user import User


class Area(db_context.Document):
    user = db_context.ReferenceField(User)
    name = db_context.StringField()
    address = db_context.StringField()
    code = db_context.StringField(unique=True)
    state = db_context.BooleanField()

    def get_id(self):
        return str(self.pk)
