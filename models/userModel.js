const {Schema , model} = require("../connection");
const bcrypt=require('bcrypt');

const schema = new Schema({
   
    name:String, 
    description:String,
    documents: Array,
    email:String,
    password:String,
    thumbnail:String,
    phone:String,
    age:Date,  
    teamInfo:Object,
    details:Array,
    createdAt:Date,
})

//here we are hashing the password
schema.pre('save',function(next){
    console.log("hi hashing!");
    if(this.isModified('password')){
this.password=bcrypt.hash(this.password, 12);
    }
    next(); 
});
 
module.exports=model("startup",schema);