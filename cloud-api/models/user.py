from flask_mongoengine import MongoEngine
from models.db_context import db_context


class User(db_context.Document):
    name = db_context.StringField()
    firstLastName = db_context.StringField()
    secondLastName = db_context.StringField()
    cardID = db_context.IntField(required=True, unique=True)
    image = db_context.StringField(required=True)
    password = db_context.StringField(requierd=True)

    def get_id(self):
        return str(self.pk)

    def to_json(self):
        return {
            "_id": str(self.pk),
            "name": self.name,
            "firstLastName": self.firstLastName,
            "secondLastName": self.secondLastName,
            "cardID": self.cardID,
            "image": self.image
        }
