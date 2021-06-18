from lupin import Mapper, Schema, fields as f


class UserModel(object):
    def __init__(self, name, firstLastName, secondLastName, cardID, image, code):
        self.name = name
        self.firstLastName = firstLastName
        self.secondLastName = secondLastName
        self.cardID = cardID
        self.image = image


user_model_schema = Schema(
    {
        "name": f.String(),
        "firstLastName": f.String(),
        "secondLastName": f.String(),
        "cardID": f.Int(),
        "image": f.String(),
    }, "user_model"

)
user_resource_schema = Schema(
    {
        "userName": f.String(binding="name"),
        "userFirstLastName": f.String(binding="firstLastName"),
        "userSecLastName": f.String(binding="secondLastName"),
        "idCard": f.Int(binding="cardID"),
        "photo": f.String(binding="image")
    }, "user_resource"
)
