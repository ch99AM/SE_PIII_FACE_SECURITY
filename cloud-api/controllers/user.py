import database.user_repo as user_repo
from mapping.mapper import object_mapper


def get_user(body):
    idCard = body["idCard"]
    one = user_repo.get_one_user(idCard)

    return one


def get_user_photo(body):
    return "GetUserPhoto"


def add_user(body):
    resource = object_mapper.load(body, "user_resource")
    model = object_mapper.dump(resource, "user_model")
    answer = user_repo.insert_one_user(model)
    return answer


def update_user(body):
    return "updateUser"


def update_user(body):
    return "deleteUser"
