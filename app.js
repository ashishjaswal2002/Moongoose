const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopDB",{useNewParser:true,useUnifiedTopology:true}).then(()=>console.log("Connection successfull")).catch((err)=>console.log(err));