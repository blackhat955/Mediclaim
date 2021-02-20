const express=require('express');
const {medilist, Medilist}=require('../api/mediclaimlist');
const{mediclaim, Mediclaim}=require('../api/mediclaim');
const{user,User}=require('../api/user');
const _=require('loadsh');
const router=express.Router();

router.get('/',async(req,res)=>{
    const medilist=await Medilist.find().select('-password');
    return res.send(medilist);
});

router.post('/',async(req,res)=>{
    const mediclaim=await Mediclaim.findById(req.body.id);
    if(!mediclaim)return res.status(404).send('This id is not register');
    const medilist=new Medilist({
        amount:req.body.amount,
        userInfo:{
            name:mediclaim.name,
            email:mediclaim.email,
            url:mediclaim.url
        }
    });
    const result=await medilist.save();
    return res.send(result);
});

router.put('/:id',async(req,res)=>{
    const medilist=await Medilist.findByIdAndUpdate(req.params.id,{
        url:req.body.amount
    });
    return res.send(medilist);
    });
    router.delete('/:id',async(req,res)=>{
        const mediclaim=await Medilist.findByIdAndRemove(req.params.id);
        return res.send(`Data with ID:${req.params.id} is remove successfully`);
    });
    

    module.exports=router;