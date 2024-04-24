const mongo = require("mongoose")

mongo.connect("mongodb+srv://hegdeadithyak:adi4720Q@prjct.0cc2j4d.mongodb.net/")

const Schema = mongo.Schema({
    title : String,
    description : String,
    id : String
})

const todo = mongo.model("todos",Schema)

module.exports = {
    todo : todo
}

