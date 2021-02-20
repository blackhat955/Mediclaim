const express=require('express');
const {mediclaim, Mediclaim}=require('../api/mediclaim');
const _=require('loadsh');
const {user,User}=require('../api/user');
const router=express.Router();

router.get('/',async(req,res)=>{
    const mediclaim=await Mediclaim.find().select('-password');
    return res.send(mediclaim);
});
router.post('/',async(req,res)=>{
    const user=await User.findById(req.body.id);
    if(!user)return status(404).send('User with this ID is nor found..........');
    const mediclaim=new Mediclaim({
        userInfo:{
            email:user.email,
        },
        name:req.body.name,
        url:req.body.url,
        description:req.body.description
    });
    const result=await mediclaim.save();
    return res.send(_.pick(result,['url']));
});
router.put('/:id',async(req,res)=>{
const mediclaim=await Mediclaim.findByIdAndUpdate(req.params.id,{
    url:req.body.url
});
return res.send(mediclaim);
});
router.delete('/:id',async(req,res)=>{
    const mediclaim=await Mediclaim.findByIdAndRemove(req.params.id);
    return res.send(`Data with ID:${req.params.id} is remove successfully`);
});

module.exports=router;