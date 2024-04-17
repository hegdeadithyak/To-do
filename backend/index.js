const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsepayload = createTodo.safeParse(createpayload);

  if (!parsepayload.success) {
    req.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function(req, res){
    const todos = await todo.find({
        completed : false
    });

  res.json({
     todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
