from flask import jsonify
import database.access_repo as access_repo


def get_by_user(body):
    id_card = body["searchCriteria"]
    startTime = body["startDateTime"]
    finishTime = body["finishDateTime"]

    answer = access_repo.get_records_by_user(id_card, startTime, finishTime)
    return jsonify(answer)


def get_by_area(body):
    area_code = body["searchCriteria"]
    startTime = body["startDateTime"]
    finishTime = body["finishDateTime"]

    answer = access_repo.get_records_by_area(area_code, startTime, finishTime)
    return jsonify(answer)
