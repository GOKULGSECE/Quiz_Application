const mongoose = require('mongoose'); 
 
const UserModels = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})
const Users = mongoose.model('users',UserModels);
module.exports = Users