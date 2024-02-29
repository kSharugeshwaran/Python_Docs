const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("Users",UserSchema)

module.exports = userModel;