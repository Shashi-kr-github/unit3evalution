const express = require('express');

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Ecomerce1" , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         useCreateIndex: true,
    })
}

const productSchema = new mongoose.Schema({
    product_c: String,
    price: Number,
    color_1: String,
    color_2: String,
    color_3: String,
    men_: Boolean,
    women_: Boolean,
},{versionKey: false
});

const Item = mongoose.model("item" , productSchema)

app.post("/items", async function (req,res){
     const item = await Item.create(req.body);
     return res.send(item);
})

app.get("/items", async function(req,res){
    const items = await Item.find().lean().exec()
    return res.send(items)
})

app.listen(12002, async () =>{
     await connect();
    console.log("listen the port 3002");

});