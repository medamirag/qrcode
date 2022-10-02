module.exports = (sequilize,Datatype)=>{

    const Form = sequilize.define("form",{
        title:{
            type:Datatype.STRING,
            allowNull: false,
        },
        category:{
            type:Datatype.STRING
        },



    })
    return Form
}