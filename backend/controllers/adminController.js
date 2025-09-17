import { error } from "console";
import { Card } from "../models/CardSchema.js";
import { VanBuild } from "../models/VanBuildSchema.js";
import { Van } from "../models/VanModelSchema.js";
import cloudinary from "cloudinary"
import { homepageSchema } from "../models/homepageSchema.js";
import { Image } from "../models/imageSchema.js";
import { Inventory} from "../models/InventorySchema.js";



cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})


export const addImages= async(req,res)=>{
    try {
        const {pageName,section}= req.body;

       if(!pageName || ! section){
        return res.status(400).json(error="something went wrong")
       }
       
        if(!req.files){
            return res.status(400).json(error="file not found")
        }
        
    
        const imageUrls = req.files.map(file => file.path);

        const newImg = new Image({
            pageName,section,imageUrl:imageUrls
        })

        await newImg.save()

          res.status(200).json({ error: "item added successfully",newImg });

    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
        console.log(error)
    }
}

export const addCard = async(req,res)=>{
    console.log(req.files)
    try {
        const {name,description,cardtype} = req.body;

        if(!name || !description || !cardtype){
            return res.status(500).json({error:"please provide all necessary details"})
        };
        const verify = await Card.findOne({name});
        if(verify){
         return res.status(400).json({error:"something went wrong"})
        }
        if(!req.files){
            return res.status(400).json(error="file not found")
        }
         
        const imageUrls = req.files.map(file => file.path);

        
        
          const newCard = new Card({
            name,
            description,
            cardtype,
            images:imageUrls
          })

          await newCard.save();

          res.status(201).json({ message: "Card created successfully", card: newCard });
        
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
        console.log(error)

    }
}

export const vanDetails = async(req,res)=>{
    try {
         
        const {type,name,price,startingFrom,available,details}=req.body;

        if(!type || !name|| !price  || !startingFrom || !available || !details){
            return res.status(400).json({error:"something went wrong"})
        }

        const verify = await Van.findOne({name});
        if(verify){
            return res.status(400).json({error:"some error occured"})
        }
        
        if(!req.files){
            return res.status(400).json(error="file not found")
        }
         
        const imgUrls = req.files.map(file=>file.path);

        const newVan = new Van({
            type,name,price,startingFrom,available,details,images:imgUrls
        })

        await newVan.save()
        res.status(201).json({ message: "Card created successfully", van: newVan });
    } catch (error) {
        return res.error(error,'error in card details')
        
    } 
}

export const buildUtils = async(req,res)=>{
 
try {

        const{utilityType,name,details,price} = req.body;
        console.log(utilityType,price,details,name)
    
        if(!price || !utilityType || !details || !name){
            return res.status(400).json({error:"something went wrong"})
        }
        
        const verify = await VanBuild.findOne({name});
        if(verify){
            return res.status(400).json({error:"some error occured"})
        }

        const newVanBuild = new VanBuild({
            utilities: [{ utilityType,name,details,price }] 
        });

        await newVanBuild.save();
      
        res.status(200).json({message:"item saved successfully",newVanBuild})
        
    } catch (error) {
     console.log(error);
     res.status(500).json({error:"while uploading the product"})
    
}
}

export const addGears = async(req,res)=>{

 try {
       const {name,features,price} = req.body;
       console.log(name,features,price)
       if(!name || !features || !price){
           res.status(400).json({error:"something went wrong"});
       }
   
       const verify = await VanBuild.findOne({name});
       if(verify){
           res.status(400).json({error:"item already exist"});
       }
            
       console.log("Received files:", req.files);

       if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "file not found" });
      }
      
        
     const imageUrls = req.files.map(file => file.path || file.url);


       const newGears = new VanBuild({
        gears:[{images:imageUrls,name,features,price,}]
       })
       await newGears.save();
       res.status(200).json({message:"item saved successfully",newGears})

      
        
   } catch (error) {
    console.log(error)
    res.status(500).json({error:"while uploading the product"})
    
 }
}

export const addModifyImg = async(req,res)=>{
try {
        const{key}= req.body;
        console.log(key)
        if(!key){
            return res.status(400).json({error:"something went wrong"})
        }
    
        const verify = await VanBuild.findOne({key});
    
        if(verify){
            return res.status(400).json({error:"something went really wrong"});
        }
        if(!req.files || req.files.length >=2 ){
            return res.status(400).json({error:"file limit reached"});
        }
     
        const imageUrls = req.files.map(file => file.path || file.url);
    
        const modify = new VanBuild({
            modifyImg:[{key,imgUrl:imageUrls[0]}]
        })
    
        await modify.save();
        return res.status(200).json({message:"item saved successfully",modify})
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"req failed"})
}

}

 export const addModel = async(req,res)=>{
    try {
      const {modelName, range}= req.body;
      if(!modelName || !range){
           return res.status(500).json({message:"req failed"}
           )
      }
       if(!req.files || req.files.length >=3 ){
              return res.status(400).json({error:"file limit reached"});
          }
           const imageUrls = req.files.map(file => file.path || file.url);
           const model = new VanBuild({
              models:[{name:modelName,range,imgUrl:imageUrls}]
           })
           await model.save();
                   return res.status(200).json({message:"item saved successfully",model})
    } catch (error) {
        console.log(error);
     return res.status(500).json({message:"req failed"})
    }


}



export const createInventory = async (req, res) => {
  try {
    const {
      model,
      ownerName,
      price,
      emi
    } = req.body;

    if (!req.files || req.files.length > 3) {
      return res.status(400).json({ error: "Maximum of 3 files allowed." });
    }

    const imageUrls = req.files.map(file => file.path || file.url);

    let parsedDetails;
    try {
      parsedDetails = JSON.parse(req.body.details);
    } catch (err) {
      return res.status(400).json({ error: "Invalid JSON format for details" });
    }

    const newInventory = new Inventory({
      model,
      ownerName,
      image: imageUrls,
      price,
      emi,
      details: {
        VanType: parsedDetails.VanType,
        EngineNum: parsedDetails.EngineNum,
        color: parsedDetails.color,
        battery: parsedDetails.battery,
        sleepCapacity: parsedDetails.sleepCapacity,
        location: parsedDetails.location
      }
    });

    const savedInventory = await newInventory.save();
    res.status(201).json(savedInventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
