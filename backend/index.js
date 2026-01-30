const express = require("express");
const app = express();
app.use(express.json());
const { createTodo, updateTodo } = require("./types");
const { todo, Board } = require("./db");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { User } = require("./db");
const jwt = require("jsonwebtoken");

app.use(cors());

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.post("/todo",auth, async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  const newTodo = await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
    userId: req.userId,
    boardId: createPayload.boardId 
  });

  res.json(newTodo);
});


app.get("/todos",auth, async function (req, res) {
  const todos = await todo.find({userId:req.userId});

   res.json({
    todos
   })
});

app.put("/completed",auth, async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  await todo.findOneAndUpdate(
    { _id: req.body.id, userId: req.userId },
    { completed: true }
  );

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

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server error" });
  }
});


app.delete("/todo/:id", auth, async (req, res) => {
  try {
    const deleted = await todo.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!deleted) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Todo deleted" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/board", auth, async (req, res) => {
  try {
    const board = await Board.create({
      name: req.body.name,
      userId: req.userId
    });

    res.json(board);
  } catch (err) {
    res.status(500).json({ message: "Error creating board" });
  }
});

app.get("/boards", auth, async (req, res) => {
  const boards = await Board.find({ userId: req.userId });
  res.json({ boards });
});

app.get("/board/:id", auth, async (req, res) => {
  try {
    const board = await Board.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }

    res.json(board);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/todos/:boardId", auth, async (req, res) => {
  const todos = await todo.find({
    boardId: req.params.boardId,
    userId: req.userId
  });

  res.json({ todos });
});

app.delete("/board/:id", auth, async (req, res) => {
  try {
    const boardId = req.params.id;

    const deletedBoard = await Board.findOneAndDelete({
      _id: boardId,
      userId: req.userId
    });

    if (!deletedBoard) {
      return res.status(404).json({ message: "Board not found" });
    }
    
    await todo.deleteMany({ boardId: boardId });

    return res.json({
      message: "Board deleted successfully"
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000,() => console.log("server is good"));