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

const catggSchema = new mongoose.Schema(
    {
   name : {
       type : String,
       required: true
   } 
  
   }, {
       versionKey: false
   }
)

const Catogery = mongoose.model("catogery" ,catgSchema )

const colorSchema = new mongoose.Schema(
    {
   name : {
       type : String,
       required: true
   }

   }, {
       versionKey: false
   }
)

const Color = mongoose.model("color" ,colorSchema )




const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    catogery : [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "catogery",
           required: true
        }

    ],
    
    color:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "color",
          required: true
            

        }
    ]

    },
    {
        versionKey: false
    }
)


const Item = mongoose.model("item" , productSchema)

const

app.post("/items", async function (req,res){
     const item = await Item.create(req.body);
     return res.send(item);
})

app.get("/items", async function(req,res){
   
    const items = await Item.find().lean().exec()
    return res.send(items)
})

// app.get("/items/:price", async function(req,res){
//      console.log(req.params);
//     const items = await Item.fi(req.prams.price).lean().exec();
//     res.send(items)
// })


app.listen(12002, async () =>{
     await connect();
    console.log("listen the port 3002");

});