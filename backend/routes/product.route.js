import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();

// find all products 

router.get("/" , getProducts)
  
  // STORE PRODUCT 
  
  router.post('/' , createProduct)
  
  
  
  
  // DELETE PRODUCT 
  router.delete("/:id",deleteProduct)
  
  
  
  
  
  // UPDATE PRODUCT
  
  router.put("/:id",updateProduct)

  export default router;
  
  
  
  