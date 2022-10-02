const db = require('../models')
console.log(db.forms+"db");
const Form=db.forms
const Item=db.items
const User=db.users


//main work


//1.create form


const addForm = async (req,res)=>{ 
    if(req.body.id>0)
    await Form.destroy({where:{id:req.body.id}})
    delete req.body.id
    const  form = await Form.create(req.body,{include : [Item,User]})
    res.status(200).send(form)
}
//get All
const getAllForms = async (req,res)=>{
    let forms = await Form.findAll({ 
        include : [{model:Item}]
    })
    res.status(200).send(forms)
}
//get All By userId
const getAllFormsByUserId = async (req,res)=>{
    console.log(req.params);
    console.log(req);
    let forms = await Form.findAll({where:{userId:req.params.userId}})
    res.status(200).send(forms)
}
//get All
const getOneForm = async (req,res)=>{
    let id = req.params.id
    let form = await Form.findOne({ where:{id:id}, include : [{model:Item}]
    })
    res.status(200).send(form)
}
const deleteForm = async (req,res)=>{
    let id = req.params.id
     await Form.destroy({ where:{id:id}
    })
    let message = "deleted"
    res.status(200).send({message})
}


module.exports ={
    getOneForm,getAllForms,addForm,deleteForm,getAllFormsByUserId
}