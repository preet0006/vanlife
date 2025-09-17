import mongoose from "mongoose";

const vanSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
       
    },
    price:{
        type:String,
        required:true
    },

    startingFrom:{
         type:String,
         required:true
    },

    available:{
        type:String,
        required:true
    },
    images:[
        {
            type:String,
            required:true,
        }
    ],

    details:[
        {
            type:String,
            required:true
        }
    ]


})

export const Van = mongoose.model("Van",vanSchema)