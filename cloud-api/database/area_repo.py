from models.area import Area
from database.user_repo import get_one_user


def get_one_area(code_area):
    area = Area.objects.get_or_404(code=code_area)

    return area

def get_all_areas():
    areas = Area.objects()

    return areas

def insert_one_area(id_card, area):
    user = get_one_user(id_card)
    if (len(user) == 0):
        return {"error": "user_not_valid"}
        
    area["user"] = user

    try:
        new_area = Area(**area).save()
    except Exception as e:
        return e

    return new_area


def update_one_area(code_area, area):
    if "user" in area:
        user = get_one_user(area["user"])
        if len(user) == 0:
            return {"error": "user_not_valid"}
        area["user"] = user

    u_area = Area.objects.get_or_404(code=code_area)
    u_area.update(**area)

    return u_area


def delete_one(code_area):
    d_area = Area.objects.get_or_404(code=code_area)

    d_area.delete()

    return d_area
