const express = require('express');

const mongoose = require("mongoose");

const app = express();

app.use(expres.json());

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Ecomerce1" , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         useCreateIndex: true,
    })
}

const productSchema = new mongoose.Schema({
    product_catogary: String,
    price: Number,
    color_1: String,
    color_2: String,
    color_3: String,
});

const Item = mongoose.model("item" , productSchema)

// app.post("/items", async function (req,res){
//     await
// })
// app.get("/items", async function (req,res){
//     await 
// })

app.listen(13002, async () =>{
     await connect();
    console.log("listen the port 3002");

});