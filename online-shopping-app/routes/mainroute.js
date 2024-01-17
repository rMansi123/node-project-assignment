const express = require("express")
const multer = require("multer");

const routes = express.Router()

const path = require("path")
const hbs = require("hbs")

// import schema from mongoose 
const products = require("../model/product")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


//add products in database
routes.get("/",async(req,res)=>{
    // res.render("index", {subject : "java"})

    const data = await products.find()
    res.render("products",{data})
})

routes.get("/addProducts",async(req,res)=>{
    res.render("addproducts")
})

routes.post("/addProducts",async(req,res)=>{
    console.log("---> button clicked",req.body);
    const { name, price } = req.body;

    const product = products(
        {
            name : name,
            price : price,
        }
    )
    await product.save()

    console.log("sucessfully data inserted ");
    res.redirect("/")
})



routes.get("/edit/:id",async(req,res)=>{
    const editData = await products.findById(req.params.id)
    res.render("editproducts",{editData})
})

routes.post("/updateProduct",async(req,res)=>{
    const result = await products.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/")
})

routes.get("/delete/:id",async(req,res)=>{
    const deleteData = await products.findByIdAndDelete(req.params.id)
    res.redirect("/")
})


module.exports = routes