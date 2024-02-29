const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    Querytext:{
        type:String,
        required:true
    },
    comments:[]
})

const CommunityModel = mongoose.model("Queries",CommunitySchema)

module.exports = CommunityModel;