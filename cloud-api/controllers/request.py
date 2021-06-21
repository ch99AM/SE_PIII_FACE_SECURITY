from flask import jsonify
import database.access_repo as access_repo
import mapping.mapper as object_mapper


def get_by_user(body):
    id_card = body["searchCriteria"]
    startTime = body["startDateTime"]
    finishTime = body["finishDateTime"]

    answer = access_repo.get_records_by_user(id_card, startTime, finishTime)
    answer = object_mapper.build_by_user_answer(answer)

    return answer


def get_by_area(body):
    area_code = body["searchCriteria"]
    startTime = body["startDateTime"]
    finishTime = body["finishDateTime"]

    answer = access_repo.get_records_by_area(area_code, startTime, finishTime)
    answer = object_mapper.build_by_area_answer(answer)
    
    return answer
