from lupin import Mapper
import resources.user_resource as user_resource


object_mapper = Mapper()

# Register the maps
object_mapper.register(user_resource.UserModel,
                       user_resource.user_resource_schema)
object_mapper.register(user_resource.UserModel,
                       user_resource.user_model_schema)
