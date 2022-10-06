const db = require('../models')
console.log(db.forms+"db");
const Form=db.forms
const Item=db.items
const User=db.users
const sequelize=db.sequelize


//main work


//1.create form


// const addForm = async (req,res)=>{ 
//     if(req.body.id>0)
//     await Form.destroy({where:{id:req.body.id}})
//     delete req.body.id
//     const  form = await Form.create(req.body,{include : [Item,User]})
//     res.status(200).send(form)
// }
const addForm = async (req,res)=>{ 
    let  form ="";
    let formId = req.body.id;
    delete req.body.id;
    let date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' + 
        ('00' + date.getUTCHours()).slice(-2) + ':' + 
        ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
        ('00' + date.getUTCSeconds()).slice(-2);
    

    if(formId>0){
        [results, metadata]  =await sequelize.query(`delete from items where formId=${formId}`);

        for await (const element of req.body.items) {
            let lat =element.lat||0;
            let lng =element.lng||0;
            let value =element.value;
            if(element.value.split("'")[1]!=undefined){
                value =element.value.split("'")[0]+"''"+element.value.split("'")[1]
            }
            let label =element.label;
            if(element.label.split("'")[1]!=undefined){
                label =element.label.split("'")[0]+"''"+element.label.split("'")[1]
            }
            [results, metadata]  =await sequelize.query(`insert into items(label,type,value,lat,lng,createdAt,
                updatedAt,formId)values(
                '${label}',
                '${element.type}',
                '${value}',
                '${lat}',
                '${lng}',
                '${date}',
                '${date}',
                '${formId}') 
                `);

          }
        form= await Form.update(req.body,{where:{id:formId}})

    }
    else{
      form = await Form.create(req.body,{include : [Item,User]})
    }
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