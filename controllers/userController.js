const db = require('../models')
console.log(db.forms+"db");
const User=db.users
const Form=db.forms


//main work


//1.create form


const addUser = async (req,res)=>{
   
    const user = await User.create(req.body)
    res.status(200).send(user)
    console.log(user);
}

//get All
const getOneUser = async (req,res)=>{
    let user = await User.findOne({ where:{username:req.body.username,password:req.body.password}, include : [{model:Form,
        as :'user_form'}]
    })
    res.status(200).send(user)
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