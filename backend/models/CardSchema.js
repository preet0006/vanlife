import mongoose from "mongoose";

export const cardSchema = new mongoose.Schema({
    cardtype:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    images:[
        {
          type:String,
          required:true 
        }
]

})

export const Card = mongoose.model("Card",cardSchema)