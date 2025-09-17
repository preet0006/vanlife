import express from "express";
import { home, InventoryImages, PlusPage, restHome, sendbuildOrder } from "../controllers/operationController.js";

const router = express.Router();

router.get("/homepage",home);
router.get("/rest",restHome)
router.get("/build",sendbuildOrder)
router.get("/inventory",InventoryImages)
router.get("/plus",PlusPage)




export default router