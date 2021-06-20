import database.area_repo as area_repo
import mapping.mapper as mapper

from flask import jsonify


def get_area(body):
    code = body["code"]
    answer = area_repo.get_one_area(code)

    return jsonify(answer)


def get_all_areas(body):
    answer = area_repo.get_all_areas()

    return jsonify(answer)


def add_area(body):
    idCard = body["userIdCard"]
    area = body["area"]
    answer = area_repo.insert_one_area(idCard, area)

    return jsonify(answer)


def update_area(body):
    code = body["code"]
    area = body["area"]
    answer = area_repo.update_one_area(code, area)

    return jsonify(answer)


def delete_area(body):
    code = body["code"]
    answer = area_repo.delete_one(code)
    return jsonify(answer)
