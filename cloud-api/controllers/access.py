from flask import jsonify
import database.access_repo as access_repo


def get_access(body):
    id_card_user = body["userIdCard"]
    code_area = body["areaCode"]

    answer = access_repo.get_access(id_card_user, code_area)

    return jsonify(answer)


def add_access(body):
    print(type(body), body)
    id_card_user = body["userIdCard"]
    code_area = body["areaCode"]
    access_body = body["access"]

    answer = access_repo.insert_one_access(
        id_card_user, code_area, access_body)

    return jsonify(answer)


def update_out_datetime(body):
    print(body)
    access_id = str(body["accessId"]).strip()
    access_info = body["access"]

    

    answer = access_repo.update_out_datetime(access_id, access_info)

    return jsonify(answer)
