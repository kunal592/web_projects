import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    sender:{
        type: String,
        require: true,
        unique: true,
    },
    reciver:{
        type: String,
        require: true,
        
    },
    text:{
        type: String,
        require: true,
       
    },
    images:{
        type: String,
        default:"",
    },
   
},{timestamps: true})

const Message = mongoose.model("Message", messageSchema)

export default Message;
