import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    pageName:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    
    imageUrl:[
          {
            type:String,
            required:true 
          }
]
})

export const Image = mongoose.model("Image",imageSchema)