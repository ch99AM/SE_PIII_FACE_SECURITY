from flask_mongoengine import MongoEngine
from models.area import Area
from models.db_context import db_context

class System(db_context.Document):
    area = db_context.ReferenceField(Area)
    code = db_context.StringField(unique=True)
    state = db_context.BooleanField()

    def get_id(self):
        return str(self.pk)