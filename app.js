const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopDB",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("Connection successfull")).catch((err)=>console.log(err));

const playlistSchema  = new mongoose.Schema({

  id:{
    type:Number,
    required:true
  },
  name:String,
  price:Number,
  active:Boolean,
  date:{
    type:Date,
    default:Date.now
  }
})

const Playlist = new mongoose.model("Playlist",playlistSchema);

const playslistone  = new Playlist({
  id:1,
  name:"I don't wanna live forever",
  price:20000,
  active:true,
})
playslistone.save();
