from lupin import Mapper
import resources.user_resource as user_resource
import copy
import json


object_mapper = Mapper()

# Register the maps
object_mapper.register(user_resource.UserModel,
                       user_resource.user_resource_schema)
object_mapper.register(user_resource.UserModel,
                       user_resource.user_model_schema)


# Functions
def del_none_from_json(json_doc):
    if not isinstance(json_doc, dict):
        return json_doc
    temp_json = copy.copy(json_doc)
    for key in temp_json:
        if json_doc[key] == None:
            del json_doc[key]
        elif isinstance(json_doc[key], dict):
            del_none_from_json(json_doc[key])
    return json_doc


def map_load(body, resource_model_to_map):
    map_result = object_mapper.load(body, resource_model_to_map)
    return del_none_from_json(map_result)


def map_dump(body, resource_model_to_map=""):
    map_result = ''
    if resource_model_to_map == "":

        map_result = object_mapper.dump(body)
    else:
        map_result = object_mapper.dump(body, resource_model_to_map)
    return del_none_from_json(map_result)


def build_by_area_answer(data):
    temp_data = []
    for element in data:
        temp = element.to_mongo().to_dict()
        del temp["_id"]
        del temp["area"]
        temp["user"] = {
            "name": element.user.to_json()["name"],
            "idCard": element.user.to_json()["cardID"]
        }
        temp["inDateTime"] = temp["inDateTime"].strftime("%d-%m-%Y (%H:%M:%S)")
        if "outDateTime" in temp:
            temp["outDateTime"] = temp["outDateTime"].strftime(
                "%d-%m-%Y (%H:%M:%S)")
        temp_data.append(temp)

    return json.dumps(temp_data)


def build_by_user_answer(data):
    temp_data = []
    for element in data:
        temp = element.to_mongo().to_dict()
        del temp["_id"]
        del temp["user"]
        temp["area"] = element.area.to_json()["name"]
        temp["inDateTime"] = temp["inDateTime"].strftime("%d-%m-%Y (%H:%M:%S)")
        if "outDateTime" in temp:
            temp["outDateTime"] = temp["outDateTime"].strftime(
                "%d-%m-%Y (%H:%M:%S)")
        temp_data.append(temp)

    return json.dumps(temp_data)
