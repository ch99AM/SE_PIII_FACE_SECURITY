from flask_mongoengine import MongoEngine
from models.db_context import db_context
from models.area import Area
from models.user import User


class Access(db_context.Document):
    user = db_context.ReferenceField(User, required=True)
    area = db_context.ReferenceField(Area, required=True)
    inDateTime = db_context.DateTimeField(required=True)
    outDateTime = db_context.DateTimeField()


    def get_id(self):
        return str(self.pk)