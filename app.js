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
  age:Number ,
  favouriteFruit:fruitSchema
})

const Person = mongoose.model("Person",PersonSchema);

const pineApple =  new Fruit({
  name:"Pineapple",
  score:9,
  review:"Great Fruit"
})
// pineApple.save();

const Angle = new Person({
  name:'Amy'
  ,age:12,
  favouriteFruit:pineApple
})  
Angle.save();


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

// Fruit.deleteOne({id:"63e7baa30b7bff4cfb81791c"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully update");
//   }
// })
// John.deleteMany({name:'John'},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully update");
//   }
// })

const findMethod = async ()=>{

        try{
         const result = await products.find({price:0.8}).select({name:1})
         console.log(result);
        }catch(err){
    if(err){
      console.log(err);

    }else{
      console.log("Running Successfull"); 
    }
        }
        
}
findMethod();