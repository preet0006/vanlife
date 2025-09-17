import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "noovo/homepage",
    allowed_formats: ["jpg", "png", "jpeg", "webp","gif"],
    use_filename: false,         
    unique_filename: true,      
  },
});


export const upload = multer({ storage }).array("images", 9);







