import mongoose from "mongoose";

export const homepageSchema = new mongoose.Schema({
         
   images:[
    {
     type:mongoose.Schema.Types.ObjectId,
     ref:"Image"
    }
   ],

     cards: [
     {
     type: mongoose.Schema.Types.ObjectId, 
     ref: "Card"
     }
    ],

 


})





// homepageSchema.pre("save", function (next) {
//     if (this.homeImages.length === 0) {
//       this.utilities = undefined; 
//     }
//     if (this.cards.length === 0) {
//       this.cards = undefined; 
//     }
//     next();
//   });

export const Home = mongoose.model("Home",homepageSchema)