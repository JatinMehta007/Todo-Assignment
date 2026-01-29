const express = require("express");
const app = express();
app.use(express.json());
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { User } = require("./db");
const jwt = require("jsonwebtoken");

app.use(cors({}));

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  const newTodo = await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json(newTodo);
});


app.get("/todos", async function (req, res) {
  const todos = await todo.find(); // i will write the title and description inside todo find

   res.json({
    todos
   })
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  await todo.findByIdAndUpdate(req.body.id, {
    completed: true
  });

  return res.json({
    msg: "Todo marked as completed"
  });
});


app.post("/signup", async (req,res) => {
  try{
    const {username, email, password} = req.body;
    
      const existingUser = await User.findOne({
         email 
      })

      if(existingUser){
      return res.status(400).json({ message: "User already exists" });
      }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username ,
      email,
      password : hashedPassword
    })
    
    const token = jwt.sign({
      id: newUser._id
    }, process.env.JWT_SECRET,{expiresIn : "7d"});

   return res.status(201).json({
      token, 
      user : newUser
    });

  } catch (err) {
    console.error(err);
   return res.status(500).json({ message: "Server error" });
  } 
})

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User deleted successfully",
      deletedUser
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});


app.listen(3000,() => console.log("server is good"));