const express=require('express');
const cors=require('cors')
app=express();

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
//     res.json({message:'hi'})
// })
const formRouter =  require('./routes/formRouter')
app.use('/api/forms',formRouter)
const userRouter =  require('./routes/userRouter')
app.use('/api/users',userRouter)
const itemRouter =  require('./routes/ItemRouter')
app.use('/api/items',userRouter)


const PORT = process.env.PORT || 4000


//Server
app.listen(PORT,()=>{
    console.log("Server running on port"+PORT);
    
    })