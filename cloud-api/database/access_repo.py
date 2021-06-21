from models.access import Access
import database.user_repo as user_repo
import database.area_repo as area_repo
from mongoengine.queryset.visitor import Q


def get_access(id_card, area_code):
    user = user_repo.get_one_user(id_card)
    area = area_repo.get_one_area(area_code)
    access = Access.objects(area=area, user=user)

    return access


def insert_one_access(id_card, area_code, body):
    user = user_repo.get_one_user(id_card)
    area = area_repo.get_one_area(area_code)
    body["user"] = user
    body["area"] = area
    access = Access(**body).save()

    return access


def update_out_datetime(object_id, data):
    access_data = Access.objects()
    access = ''

    for element in access_data:
        if element.get_id() == object_id:
            access = element
            break
    if access == '':
        return {"error": "not found"}

    access.update(**data)

    return access


def get_records_by_user(id_card, startTime, finishTime):
    user = user_repo.get_one_user(id_card)
    access = Access.objects(Q(user=user)
                            & Q(inDateTime__gte=startTime)
                            & (Q(outDateTime__lte=finishTime) | Q(outDateTime=None)))

    return access


def get_records_by_area(area_code, startTime, finishTime):
    area = area_repo.get_one_area(area_code)
    access = Access.objects(Q(area=area)
                            & Q(inDateTime__gte=startTime)
                            & (Q(outDateTime__lte=finishTime) | Q(outDateTime=None)))

    return access
