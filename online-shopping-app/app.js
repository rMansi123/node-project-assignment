const express  = require("express")
const app = express()

// mongoose connectivity 
const mongoose = require("mongoose")

app.use(express.urlencoded({extended:false}))

app.use("/static",express.static("public")) //have to define above the main route path (load static pages)
const home = require("./routes/mainroute")

app.use("",home)

app.set('view engine','hbs')
app.set("views","views")

// hbs.registerPartial(path.join(__dirname,"views/partial"))

require("dotenv").config()

// connection with database 

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("DAtabase connected ");
})

app.listen(process.env.PORT,()=>{
    console.log("server is running");
})