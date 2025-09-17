import mongoose from "mongoose";
import 'dotenv/config';

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"vanlife",

    }).then(()=>{
        console.log("connected to database")
    }).catch(err=>{console.log(`some error occured while connecting to database:${err}`)})

}