from flask import jsonify
from models.user import User


def get_one_user(ID):
    user = User.objects(cardID=ID)
    return jsonify(user)

def insert_one_user(user):
    new_user = User(**user).save()
    return jsonify(new_user)