module.exports = (sequilize,Datatype)=>{

    const Item = sequilize.define("item",{
        label:{
            type:Datatype.STRING,
            allowNull: false,
        },
        type:{
            type:Datatype.STRING
        },
        value:{
            type:Datatype.STRING
        },
        lat:{
            type:Datatype.STRING
        },
        lng:{
            type:Datatype.STRING
        }



    })
    return Item
}