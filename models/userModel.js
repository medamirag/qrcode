module.exports = (sequilize,Datatype)=>{

    const User = sequilize.define("user",{
        username:{
            type:Datatype.STRING,
            allowNull: false,
        },
        password:{
            type:Datatype.STRING,
            allowNull : false
        },



    })
    return User
}