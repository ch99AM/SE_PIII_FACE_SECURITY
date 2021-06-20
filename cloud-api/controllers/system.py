import database.system_repo as system_repo

from flask import jsonify



def get_system(body):
    code = body["code"]
    answer = system_repo.get_one_system(code)

    return jsonify(answer)


def get_all_systems():
    answer = system_repo.get_all_systems()

    return jsonify(answer)


def add_system(body):
    area_code = body["areaCode"]
    system = body["system"]
    answer = system_repo.insert_one_system(area_code, system)

    return jsonify(answer)


def update_system(body):
    code = body["code"]
    system = body["system"]
    answer = system_repo.update_one_system(code, system)

    return jsonify(answer)


def delete_system(body):
    code = body["code"]
    answer = system_repo.delete_one(code)
    return jsonify(answer)
