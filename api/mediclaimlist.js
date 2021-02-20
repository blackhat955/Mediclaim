const mongoose=require('mongoose');
const {mediclaim}=require('../api/mediclaim');
const {user}=require('../api/user');

const medilist=new mongoose.Schema({
    amount:{
        type:String,
        max:30
    },
    userInfo:mediclaim,
    email:user

});
const Medilist=mongoose.model('Medilist',medilist);


module.exports={medilist,Medilist};