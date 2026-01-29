// write  basic express boiler plate code,
// with express.json() middlewares

/* body{
    title : string;
    descipion:string;
}*/

const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const { User } = require("./db");
const jwt = require("jsonwebtoken");


app.use(express.json());
// in this you can allow the fronted at any server it can run  
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
    completed:false
  });

  // res.json({
  //   msg: " todo created",
  // });
  res.json(newTodo);
});


app.get("/todos", async function (req, res) {
  const todos = await todo.find(); // i will write the title and description inside todo find

   res.json({
    todos
   })
});


app.put("/completed",async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update({
    _id : req.body.id
  },{
    completed : true
  })

  res.json({
    msg : "Todo marked  as completed" 
  })
});


app.post("/signup", async (res,req) => {
  try{
    const {name, email, password} = req.body;
    
      const existingUser = await User.findOne({
         email 
      })

      if(!existingUser){
      return res.status(400).json({ message: "User already exists" });
      }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name ,
      email,
      password : hashedPassword
    })
    
    const token = jwt.sign({
      id: newUser._id
    }, process.env.JWT_SECRET,{expiresIn : "7d"});

    res.json(201).json({
      token, user:newUser
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  } 
})

app.listen(3000);