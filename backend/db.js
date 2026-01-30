require('dotenv').config();

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI);

const todoSchema = new mongoose.Schema({
    title : String,
    description: String,
    completed : Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
});

const UserSchema = new mongoose.Schema({
    username : String,
    email : {type : String, unique: true},
    password : String,
})

const todo = mongoose.model('todos',todoSchema);
const User = mongoose.model('user',UserSchema);

module.exports = {
   todo,
   User
}
