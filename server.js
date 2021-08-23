const express = require('express');

const mongoose = require('mongoose');

const app = express();

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



app.listen(13002, () =>{
    console.log("listen the port 3002");

});