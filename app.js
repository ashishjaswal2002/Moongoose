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

 //Second
 const playlistone2 = new Playlist({
  id:2,
  name:"Trampoline",
  price:30000,
  active:true,
 });
 const playlistone3 = new Playlist({
  id:3,
  name:" 50 Shades of Grey",
   price:60000,
   active:true,

 });


 const result  = Playlist.insertMany([playlistone2, playlistone3]);

 const getDocument = function(){
  const result  = Playlist.find({name:'Trampoline'});
  console.log(result); 
 }
 getDocument();

