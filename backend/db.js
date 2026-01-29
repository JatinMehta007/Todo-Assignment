// mongodb+srv://admin:jatin@cluster0.pbdobtk.mongodb.net/

/*
Todo{
    title : string ,
    description : String,
    completed : boolean
}
*/ 
const mongoose = require("mongoose")

// this was not the right thing to do
mongoose.connect("mongodb+srv://admin:jatin@cluster0.pbdobtk.mongodb.net/Poornima_Todo");
const todoSchema =  mongoose.Schema({
    title : String,
    description: String,
    completed : Boolean

});

const todo = mongoose.model('todos',todoSchema);
module.exports = {
   todo
}