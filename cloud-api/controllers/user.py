import database.user_repo as user_repo
import database.admin_user_repo as admin_user_repo
import database.consultant_user_repo as consultant_user_repo
from flask import jsonify
import mapping.mapper as mapper


def get_user(body):
    idCard = body["idCard"]
    answer = user_repo.get_one_user(idCard)

    return jsonify(answer)


def get_admin(body):
    idCard = body["idCard"]
    answer = admin_user_repo.get_one_admin_user(idCard)

    return jsonify(answer)


def get_consultant(body):
    idCard = body["idCard"]
    answer = consultant_user_repo.get_one_consultant_user(idCard)

    return jsonify(answer)


def get_all_users():
    answer = user_repo.get_all_users()

    return jsonify(answer)


def get_user_photo(body):
    idCard = body["idCard"]
    answer = user_repo.get_photo_for_user(idCard)
    return jsonify(answer)


def add_user(body):
    resource = mapper.map_load(body, "user_resource")
    model = mapper.map_dump(resource, "user_model")
    answer = user_repo.insert_one_user(model)
    return jsonify(answer)


def add_admin(body):
    id_card = body["userIdCard"]
    admin = body["admin"]
    answer = admin_user_repo.insert_one_admin_user(id_card, admin)
    return jsonify(answer)


def add_consultant(body):
    id_card = body["userIdCard"]
    consultant = body["consultant"]
    answer = consultant_user_repo.insert_one_consultant_user(id_card, consultant)
    return jsonify(answer)


def update_user(body):
    resource = mapper.map_load(body["user"], "user_resource")
    model = mapper.map_dump(resource, "user_model")
    answer = user_repo.update_one_user(body["idCard"], model)
    return jsonify(answer)


def update_admin(body):
    id_card = body["userIdCard"]
    consultant = body["admin"]
    answer = admin_user_repo.update_one_admin_user(id_card, consultant)
    return jsonify(answer)


def update_consultant(body):
    id_card = body["userIdCard"]
    admin = body["consultant"]
    answer = consultant_user_repo.update_one_consultant_user(id_card, admin)
    return jsonify(answer)


def delete_user(body):
    idCard = body["idCard"]
    answer = user_repo.delete_one_user(idCard)
    return jsonify(answer)


def delete_admin(body):
    idCard = body["idCard"]
    answer = admin_user_repo.delete_one_admin_user(idCard)
    return jsonify(answer)


def delete_consultant(body):
    idCard = body["idCard"]
    answer = consultant_user_repo.delete_one_consultant_user(idCard)
    return jsonify(answer)
