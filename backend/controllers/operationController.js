import { Card } from "../models/CardSchema.js"
import { Image } from "../models/imageSchema.js"
import { Inventory } from "../models/InventorySchema.js";
import { VanBuild } from "../models/VanBuildSchema.js";



export const home = async(req,res)=>{
    try {
        
      const [imageData,cardData] = await Promise.all([
        Image.find({pageName:"homepage", section: { $in: ["hero", "hero2"] }}),
        Card.find({cardtype:"Van"})
      ])

      
     
     
      
    res.status(200).json({
        success: true,
        data: {
          images: imageData,
          cards: cardData,
        },
      });

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"something went wrong"})
    }

}

export const restHome = async(req,res)=>{
  try {
    
    const [cardData,imageData] = await Promise.all([
      Card.find({cardtype:{$in:["main","reviews","rear"]}}),
      Image.find({pageName:"homepage", section: { $in: ["hero3", "hero4"] }}),
    ]);

res.status(200).json({
        success: true,
        data: {
          cards: cardData,
          images: imageData,
        },
      });

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"something went wrong"})
    }

};

export const sendbuildOrder = async(req,res)=>{
  try {
    const gears = await VanBuild.find({gears:{$exists:true,$not:{$size:0}},}).select("gears")
    const colors = await VanBuild.find({availableColors:{$exists:true,$not:{$size:0}},}).select("availableColors")
    const utilities = await VanBuild.find({ utilities:{$exists:true,$not:{$size:0}},}).select(" utilities")
    const images =  await VanBuild.find({ modifyImg:{$exists:true,$not:{$size:0}},}).select("modifyImg");
   const data = await VanBuild.find({models: { $exists: true, $not: { $size: 0 } }}).select("models");
    
    if(gears){
      res.status(200).json({success:true,models:data,gears:gears,color:colors,utilities:utilities,modifyimages:images});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'something went wrong'})
  }
}


export const InventoryImages = async(req,res)=>{
  try {
  const data = await Inventory.find()
  res.status(200).json(data);
    
  } catch (error) {
     console.log(error);
    res.status(500).json({error:'something went wrong'})
    
  }
}

export const PlusPage = async(req,res)=>{
  try {
   const [images,cardData]= await Promise.all([
    Image.find({pageName:"plus"}),
    Card.find({ cardtype: { $in: ["whyNoovoCard", "plus Gear"] } })

   ])
   const whyNoovoCards = cardData.filter(card => card.cardtype === "whyNoovoCard");
   const plusGearCards = cardData.filter(card => card.cardtype === "plus Gear");
   const heroImages = images.filter(e=> e.section==="hero")

    res.status(200).json({
        success: true,
        data: {
          heroImages,
          images,
          whyNoovoCards,
          plusGearCards
        },
      });
  } catch (error) {
    console.log(error)
    
  }
}