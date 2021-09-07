const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        // required: true
    },
    type : {
        type: String,
        // required: true,
        // unique: true
    },
    sname : {
        type: String,
        // required: true,
        // unique: false
    },
    saddr : String,
    desc : String,
    colors : String,
    price : String,
    dimensions : String,
    warranty : String,
    weight : String,
    model : String,
    connection : String,
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;