const mongoose=require('mongoose');
const express=require('express');
const medilist=require('./router/medilistRouter')
const user=require('./router/userRouter');
const mediclaim=require('./router/mediclaimRouter');
const app=express();
app.use(express.json());
mongoose.connect('mongodb://localhost/MediClaim',{useNewUrlParser:true,useUnifiedTopology:true})
 .then(()=>console.log('connection is successful'))
 .catch(err=>console.log('Connection is failed!!!!'));

app.use('/api/user',user);
app.use('/api/mediclaim',mediclaim);
app.use('/api/medilist',medilist);


 const port=process.env.PORT||3000;
 app.listen(port,()=>console.log(`Connection is establish on port:${port}`));
