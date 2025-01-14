import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts = async (req , res)=>{

    try {
      const products = await Product.find({});
      if(products.length===0){
        return res.status(404).json({success:false , error:"no products found"});
      }
      res.status(200).json({success:true , data:products});
    } 
    catch (error){
  console.log(error)
    }
  } 



export const createProduct = async (req , res) =>{
    const product=req.body;
    if(!product.name || !product.price || !product.image){
      return res.status(400).json({success:false,error:'All fields are required'});
    }
    const newProduct = new Product(product)
    try {
       await newProduct.save();
      res.status(201).json({success:true , data:newProduct});
    }
    catch(error){
      console.log("error while creating product",error.message)
      res.status(500).json({success:false,message:"server error"})
    }
  
  }

export const deleteProduct = async (req,res)=>{
    const {id} = req.params;
    console.log(id)
    try{
      await Product.findByIdAndDelete(id);
      res.status(200).json({success:true , message:"product deleted"});
    }
    catch(error){
      console.log("error while deleting product",error.message)
      res.status(500).json({success:false,message:"server error"})
    } 
  }

export const updateProduct = async (req,res)=>{  
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success:false , error:"invalid id"});
    }
    try{
      const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
      res.status(200).json({success:true , message:"product updated",data:updatedProduct});
    }
    catch(error){
      console.log("error while updating product",error.message)
      res.status(500).json({success:false,message:"server error"})
    }
    }