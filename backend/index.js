const express = require("express")
const { resourceLimits } = require("worker_threads")
const app = express()

app.use(express.json())


app.get("/todos",(req,res)=>{
    res.send("Hello There!!")
})

app.listen(3000)