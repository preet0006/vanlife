import mongoose from "mongoose";

const vanBuild = new mongoose.Schema({

  models:[{
    name:String,
    range:String,
    imgUrl:[String] 
  }],

    utilities:[
    {   
       
        utilityType: String,
        name:String,
        details:String,
        price:mongoose.Schema.Types.Mixed
    }
],

     availableColors:[
      {
        key:String,
        imgUrl:String
      }    
     ],


    gears:[
        {
            images:[String],
            name:String,
            price:Number,
            features:String
        }
    ],

    modifyImg:[
      {
        key:String,
        imgUrl:String
      },

    ]




},{minimize:true})



vanBuild.pre("save", function (next) {
    if (this.utilities.length === 0) {
      this.utilities = undefined; 
    }
    if (this.gears.length === 0) {
      this.gears = undefined; 
    }
    if (this.modifyImg.length === 0) {
      this.modifyImg = undefined;
    }
    if (this.availableColors.length === 0) {
      this.availableColors = undefined;
    }

    next();
  });
  

export const VanBuild = mongoose.model("VanBuild",vanBuild)





