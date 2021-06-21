from flask import jsonify
from models.user import User


def get_one_user(card_id):
    user = User.objects.get_or_404(cardID=card_id)
    return user


def get_all_users():
    users = User.objects()

    return users


def get_user_by_mongo_id(mongo_id):
    user = User.objects.get_or_404(id=mongo_id)

    return user


def get_photo_for_user(card_id):
    user = User.objects.get(cardID=card_id)
    if len(user) == 0:
        return user
    return user


def insert_one_user(user):
    try:
        new_user = User(**user).save()
    except Exception:
        return {"error": "not unique error"}

    return new_user


def update_one_user(card_id, user):
    print(card_id, user)
    u_user = User.objects.get_or_404(cardID=card_id)
    u_user.update(**user)

    return u_user


def delete_one_user(card_id):
    d_user = User.objects.get_or_404(cardID=card_id)
    d_user.delete()

    return d_user
