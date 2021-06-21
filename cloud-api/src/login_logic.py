import database.user_repo as user_repo
import database.admin_user_repo as admin_repo
import hashlib


def check_user_login(body):
    id_user = body["userIdCard"]
    password = body["password"]

    user = user_repo.get_one_user(id_user)
    admin = admin_repo.get_one_admin_user(id_user)

    if user.get_id() == admin.user.get_id():
        if hashlib == hashlib.md5(user.password):
            return {
                "token": "token_generated",
                "validated": True
            }

    return {
        "token": "token_not_generated",
        "validated": False
    }
