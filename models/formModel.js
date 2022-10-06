module.exports = (sequilize,Datatype)=>{

    const Form = sequilize.define("form",{
        title:{
            type:Datatype.STRING,
            allowNull: false,
        },
        category:{
            type:Datatype.STRING
        },
        style:{
            type:Datatype.STRING
        },
        border:{
            type:Datatype.STRING
        },
        width:{
            type:Datatype.STRING
        },



    })
    return Form
}