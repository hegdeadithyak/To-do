const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hegdeadithyak:adi4720Q@prjct.0cc2j4d.mongodb.net/")

const todoSchema = mongoose.Schema({
    title :String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos",todoSchema)

module.exports= {
    todo : todo
}