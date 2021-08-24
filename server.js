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

const itemSchema = new mongoose.Schema({
    product_c: String,
    price: Number,
    color_1: String,
    color_2: String,
    color_3: String,
    men: Boolean,
    Women: Boolean


}, {
    versionKey: false
}

)

const Item = mongoose.model("item", itemSchema);

const catgSchema = new mongoose.Schema(
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



app.post("/items", async function (req,res){
    let {product, price, catogery,color} = req.body
    try{
        let items_of_auther = await Items.find(
            {
                product: {
                    price:{
                        catogery:{
                            colour: {

                            }
                        }
                    }
                }
            }
        ) 
    }

})
app.post("/items", async function(req,res){
    const item = await Item.create(req.body);

    return res.send(user);
})
app.get("/items", async function (req, res) {
  const items = await Item.find().lean().exec();
  return res.send(items);
});



app.get("/items/:id/price", async function(req,res){
    const item = await Item.findById(req.params.id).lean().exec();
    res.send(item);
})
app.get("/items/:id/color_1", async function (req, res) {
  const item = await Item.findById(req.params.id).lean().exec();
  res.send(item);
});

app.delete("/items/:id", async function (req,res){
    const item = await Item.findByIdAndDelete(req.params.id)
    res.send(item);
})




app.listen(16002, async () =>{
     await connect();
    console.log("listen the port 3002");

});