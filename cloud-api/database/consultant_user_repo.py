from models.consultant_user import ConsultantUser
from database.user_repo import get_one_user


def get_one_consultant_user(id_card):
    user = get_one_user(id_card)
    consultant_user = ConsultantUser.objects.get(user=user)

    return consultant_user


def get_all_consultant_users():
    consultant_users = ConsultantUser.objects()

    return consultant_users


def insert_one_consultant_user(userIdCard, consultant_user):
    user = get_one_user(userIdCard)
    if (len(user) == 0):
        return {"error": "area_not_valid"}
    consultant_user["user"] = user

    try:
        new_consultant_user = ConsultantUser(**consultant_user).save()
    except Exception as e:
        return e

    return new_consultant_user


def update_one_consultant_user(id_card, consultant_user):
    user = get_one_user(id_card)
    u_consultant_user = ConsultantUser.objects.get_or_404(user=user)
    u_consultant_user.update(**consultant_user)

    return u_consultant_user


def delete_one_consultant_user(id_card):
    user = get_one_user(id_card)
    d_consultant_user = ConsultantUser.objects.get_or_404(user=user)

    d_consultant_user.delete()

    return d_consultant_user
