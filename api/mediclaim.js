const mongoose=require('mongoose');
const {user}=require('../api/user');

const mediclaim=new mongoose.Schema({
    userInfo:user,
    name:{
        type:String,
        min:10,
        max:30,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    description:{
        type:String,
        max:100
    },
    email:user
});
const Mediclaim=mongoose.model('Mediclaim',mediclaim);

module.exports={mediclaim,Mediclaim}
