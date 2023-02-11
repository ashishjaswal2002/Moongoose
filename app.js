const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

mongoose.connect('mongodb://localhost:27017/shopDB',{usenewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  
  name:{
    type:String,
    active:true
  }
  ,rating:{
    type:Number,
    min:4,
    max:10
  },
  review:String

});

const Fruit  = mongoose.model("Fruit",fruitSchema);


const fruit = new Fruit({
  name:'Apple',
  rating:34,
  review:"Pretty Solid as Rock"

})
// fruit.save();


///Challenge
const PersonSchema = new mongoose.Schema({
  name:String,
  age:Number  
})

const John  = mongoose.model('John',PersonSchema);
const john = new John({
  name:'John',
  age:37
})

// john.save();

 const kiwi = new Fruit({
  name:"Kiwi",
  rating:30,
  review:"The best fruit"
 })
 const Orange = new Fruit({
  name:"Orange",
  rating:4,
  review:"Good for Skin"
 })

//  Fruit.insertMany([kiwi,Orange],function(err){
//   if(err){
//   console.log(err)}
//   else{
//     console.log("Successfully save all the Fruts");
//   }
//  })
//to find
Fruit.find(function(err,fruits){
if(err){
  console.log(err);

}else{

  fruits.forEach(function(fruit){
    console.log(fruit.name)
  });
}
})
