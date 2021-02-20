const express=require('express');
const {user,User,validation}=require('../api/user');
const bcrypt = require('bcryptjs');
const _=require('loadsh');
const router=express.Router();

router.get('/',async(req,res)=>{
console.log("vikas");
const user=await User.find().select('-password');
return res.send(user);
});
router.post('/',async(req,res)=>{
    const {error}=validation(req.body);
    if(error)return res.status(400).send('Please enter the correct valuse');
    const mail=await User.findOne({email:req.body.email});
    if(mail)return res.status(400).send(`User with the email:${req.body.email} is already exist.Please try different one`)
    const user=new User(_.pick(req.body,['email','password']));
    var salt =await bcrypt.genSaltSync(10);
    user.password= await bcrypt.hashSync("user.password", salt);
    const result=await user.save();
    return res.send(_.pick(result,['email','password']));
});

module.exports=router;

