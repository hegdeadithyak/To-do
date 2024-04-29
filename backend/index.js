const express = require("express")
const app = express()
const {createParse,updateParse} = require("./types")
const {todo} = require("./db")
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/todo",async function (req,res){
    // todos =[];
    const reqst = req.body;
    const parseload = createParse.safeParse(reqst);

    if (!parseload.success){
        res.status(411).json({
            msg :  "Wrong inputs badboy."
        })
    }

    await todo.create({
        title : reqst.title,
        description : reqst.description,
        complete : false
    })

    res.json({
        msg : "Todo Created",
    });
})

app.get("/todos", async function(req, res){

    const todos = await todo.find({});


  res.json({
     todos,
  });
});

app.put("/complete", async function(req, res) {
    const createPayload = req.body;
    const ParsePayload = updateParse.safeParse(createPayload);

    if (!ParsePayload.success) {
        return res.status(411).json({
            msg: "You sent wrong inputs"
        });
    }
    console.log(createPayload);

    const todoId = createPayload.id;
    await todo.findByIdAndUpdate({_id : todoId}, {complete: true });

    return res.json({
        msg: "Todo has been Marked as Complete."
    });
});

app.listen(3000,()=>{
    console.log("Server active at 3000")
})
