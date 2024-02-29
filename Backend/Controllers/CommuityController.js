const CommunityModel = require("../Models/CommunityModel");


const createQuery = async (req,res)=>{
    const {name, picture,Querytext} = req.body
    try {
        const Query = await CommunityModel.create({
            name, picture, Querytext, comments:[]
        });
        res.status(201).json(Query);
    }catch(error){
        console.error("Error Creating user:", error);
        res.status(500).send("Internal server error");
    }
}


const addComments = async (req,res)=>{
    try {
        const id = req.params.id;
        const { name, picture, Querytext, comments } = req.body;
        const data = await CommunityModel.findByIdAndUpdate({ _id: id },{
            comments
        });
        res.status(201).json(data);
    }catch{
        console.error("Error Creating user:", error);
        res.status(500).send("Internal server error");
    }
}

module.exports = {createQuery,addComments};
