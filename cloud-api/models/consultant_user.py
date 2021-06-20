from flask_mongoengine import MongoEngine
from models.db_context import db_context
from models.user import User


class ConsultantUser(db_context.Document):
    user = db_context.ReferenceField(User, unique=True)
    state = db_context.BooleanField()


    def get_id(self):
        return str(self.pk)