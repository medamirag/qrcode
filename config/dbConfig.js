module.exports = {
    HOST : 'localhost',
    USER :'root',
    PASSWORD : '',
    DB : 'qrcode_db',
    DIALECT : 'mysql',

    POOL : {
        MAX:5,
        MIN : 0,
        ACQUIRE:30000,
        IDLE: 10000
    }
}