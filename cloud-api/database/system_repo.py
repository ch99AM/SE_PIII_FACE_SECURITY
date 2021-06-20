from models.system import System
from database.area_repo import get_one_area


def get_one_system(code_system):
    system = System.objects.get(code=code_system)

    return system

def get_all_systems():
    systems = System.objects()

    return systems

def insert_one_system(area_code, system):
    area = get_one_area(area_code)
    if (len(area) == 0):
        return {"error": "area_not_valid"}
    system["area"] = area

    try:
        new_system = System(**system).save()
    except Exception as e:
        return e

    return new_system


def update_one_system(code_system, system):
    if "area" in system:
        area = get_one_area(system["area"])
        if len(area) == 0:
            return {"error": "area_not_valid"}
        system["area"] = area

    u_system = System.objects.get_or_404(code=code_system)
    u_system.update(**system)

    return u_system


def delete_one(code_system):
    d_system = System.objects.get_or_404(code=code_system)

    d_system.delete()

    return d_system
