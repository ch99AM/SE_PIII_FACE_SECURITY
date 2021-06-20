from lupin import Mapper
import resources.user_resource as user_resource
import copy


object_mapper = Mapper()

# Register the maps
object_mapper.register(user_resource.UserModel,
                       user_resource.user_resource_schema)
object_mapper.register(user_resource.UserModel,
                       user_resource.user_model_schema)


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
