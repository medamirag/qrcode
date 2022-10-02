const db = require('../models')
const Item=db.items


//main work


//1.create form


const addItem = async (req,res)=>{
   
    const item = await Item.create(req.body)
    res.status(200).send(item)
}

const updateItem = async (req,res)=>{
    let item = await Item.update(  req.body,
    { where: { _id: req.params.id } }
    
    )
    res.status(200).send(item)
}
const deleteItem = async (req,res)=>{
    let id = req.params.id
     await Item.destroy({ where:{id:id}
    })
    let message = "deleted"
    
    res.status(200).send({message})
}


module.exports ={
    deleteItem,addItem,updateItem
}