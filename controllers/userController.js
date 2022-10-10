const db = require('../models')
console.log(db.forms+"db");
const User=db.users
const Form=db.forms
const bcrypt = require("bcrypt");
const { use } = require('../routes/formRouter');


//main work


//1.create form


const addUser = async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
             password = await bcrypt.hash(password, 10);
    
    const user = await User.create({username,password})
    res.status(200).send(user)
    console.log(user);
}

//get All
const getOneUser = async (req,res)=>{
    let message=""
    let user = await User.findOne({ where:{username:req.body.username}, 
    })
if(user){
    if(await bcrypt.compare(req.body.password, user.password))
    message = "OK"
    else{
        message =  "Verify your Password and Try Again"
    }

}
else{
    message="Verify your Username and Try Again"
}

res.status(200).send({user,message})

}
// const getOneUser = async (req,res)=>{
//     let id = req.params.id
//     let user = await User.findOne({ where:{id:id}, include : [{model:Form,
//         as :'user_form'}]
//     })
//     res.status(200).send(user)
// }
const deleteUser = async (req,res)=>{
    let id = req.params.id
    
     await User.destroy({ where:{id:id}
    })
    let message = "deleted"
    res.status(200).send({message})
}


module.exports ={
    deleteUser,getOneUser,addUser
}