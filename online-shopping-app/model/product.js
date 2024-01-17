const mongoose = require("mongoose")

const ProductsSchema = mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:String,
    },
})

module.exports = mongoose.model("products",ProductsSchema)