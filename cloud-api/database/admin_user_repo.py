from models.admin_user import AdminUser
from database.user_repo import get_one_user


def get_one_admin_user(id_card):
    user = get_one_user(id_card)
    admin_user = AdminUser.objects.get(user=user)

    return admin_user


def get_all_admin_users():
    admin_users = AdminUser.objects()

    return admin_users


def insert_one_admin_user(userIdCard, admin_user):
    user = get_one_user(userIdCard)
    if (len(user) == 0):
        return {"error": "area_not_valid"}
    admin_user["user"] = user

    try:
        new_admin_user = AdminUser(**admin_user).save()
    except Exception as e:
        return e

    return new_admin_user


def update_one_admin_user(id_card, admin_user):
    user = get_one_user(id_card)
    u_admin_user = AdminUser.objects.get_or_404(user=user)
    u_admin_user.update(**admin_user)

    return u_admin_user


def delete_one_admin_user(id_card):
    user = get_one_user(id_card)
    d_admin_user = AdminUser.objects.get_or_404(user=user)

    d_admin_user.delete()

    return d_admin_user
