const dbConfig = require('../config/dbConfig.js')
const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{ 
        host:dbConfig.HOST,
        dialect : 'mysql',
    }
)

sequelize.authenticate().then(()=>{
    console.log('connected...');
}).catch(err=>{
    console.log('Error'+err);
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.forms =require('./formModel.js')(sequelize,DataTypes)
db.items =require('./itemModel.js')(sequelize,DataTypes)
db.users =require('./userModel.js')(sequelize,DataTypes)
db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync done');
})
//OneToMany form Item
db.forms.hasMany(db.items,{onDelete: 'cascade'})
db.items.belongsTo(db.forms);

//OneToMany User Form
db.users.hasMany(db.forms)
db.forms.belongsTo(db.users)
module.exports = db