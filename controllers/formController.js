const db = require('../models')
console.log(db.forms+"db");
const Form=db.forms
const Item=db.items


//main work


//1.create form


const addForm = async (req,res)=>{
    console.log("f");
    let info={
        title:req.body.title,
        category:req.body.category
    }
    const form = await Form.create(info)
    res.status(200).send(form)
    console.log(form);
}
//get All
const getAllForms = async (req,res)=>{
    let forms = await Form.findAll({ 
        include : [{model:Item,
        as :'form_item'}]
    })
    res.status(200).send(forms)
}
//get All
const getOneForm = async (req,res)=>{
    let id = req.params.id
    let form = await forms.findOne({ where:{id:id}, include : [{model:Item,
        as :'form_item'}]
    })
    res.status(200).send(form)
}
const deleteForm = async (req,res)=>{
    let id = req.params.id
     await forms.destroy({ where:{id:id}
    })
    let message = "deleted"
    res.status(200).send({message})
}


module.exports ={
    getOneForm,getAllForms,addForm
}