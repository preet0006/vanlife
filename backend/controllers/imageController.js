import cloudinary from 'cloudinary'
import { Image } from '../models/imageSchema.js'
import fs from 'fs'




export const uploadedImages= async(req,res)=>{

    try {

        await new Promise((resolve,reject)=>{
            upload(req,res,async(err)=>{
                if(err){
                    return reject(new Error("Error in multer: " + err.message));
                }
                resolve();
                })
            });
      
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ error: "No files uploaded" });
              }
              const{pageName,section}=req.params;

              const filePaths = req.files.map((file)=>file.path);
              await uploadFiles(filePaths,pageName,section);
              res.json({ message: "Images uploaded successfully!" });


    } catch (error) {
        console.log("Upload Error",error)
        res.status(500).json({ error: "File upload failed" });
    }
}

cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

export const uploadFiles = async (filePaths, pageName, section) => {
    try {
        for (const filePath of filePaths) {
            try {
                const result = await cloudinary.v2.uploader.upload(filePath, {
                    folder: `noovo/${pageName}/${section}`,
                });

                await new Image({
                    pageName,
                    section,
                    imageUrl: result.secure_url,
                }).save();

            } catch (error) {
                console.log('Error while uploading to Cloudinary:', error);
            } finally {
                fs.unlinkSync(filePath);
            }
        }
    } catch (error) {
        console.log('Error while processing files:', error);
    }
};