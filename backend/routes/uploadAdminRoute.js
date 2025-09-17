import express from 'express';
import { uploadedImages, uploadFiles} from '../controllers/imageController.js';
import { upload } from '../middlewares/uploadFiles.js';
import { addCard, addGears, addImages, addModel, addModifyImg, buildUtils, createInventory, vanDetails } from '../controllers/adminController.js';

const router = express.Router();

router.post("/upload/:pageName/:section",upload,uploadedImages);
router.post("/addCard",upload,addCard);
router.post("/addVan",upload,vanDetails);
router.post("/vanExtras",buildUtils);
router.post("/addGear",upload,addGears);
router.post("/modify",upload,addModifyImg);
router.post("/addImg",upload,addImages)
router.post("/addMod",upload,addModel)
router.post("/addInventory",upload,createInventory)

export default router;
