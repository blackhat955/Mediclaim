const mongoose=require('mongoose');
const Joi = require('joi');
const user=new mongoose.Schema({
    email:{
        type:String,
        min:10,
        min:20,
        reqiure:true
    },
    password:{
    type:String,
    min:5,
    max:100,
    require:true
    }
});
const User=mongoose.model('User',user);


function validation({email,password}){
    const schema=Joi.object({
        email:Joi.string().max(30).required(),
        password:Joi.string().max(12).required()
    });
    return schema.validate({email,password});
}

module.exports={user,User,validation};