const mongo = require("mongoose");

mongo.connect("mongodb+srv://hegdeadithyak:adi4720Q@prjct.0cc2j4d.mongodb.net/");

const Schema = mongo.Schema({
    title: String,
    description: String,
    completed : Boolean,
});

const Todo = mongo.model("todos", Schema);

module.exports = {
    Todo: Todo,
};
