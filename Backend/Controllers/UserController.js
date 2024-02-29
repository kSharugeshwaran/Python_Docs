const userModel = require("../Models/UserModel");
const { userValidate } = require("../Validation/UserValidator");

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const dataId = await userModel.findById({ _id: id });
    res.status(200).json(dataId);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal server error");
  }
};

const createUser = async (req,res)=>{
    try {
        const {error,value} = userValidate(req.body)
        if(error){
            res.send(error.details)
        }
        const user = await userModel.create(value);
        res.status(201).json(data);
    }catch{
        console.error("Error Creating user:", error);
        res.status(500).send("Internal server error");
    }
}

module.exports = {getOneUser,createUser};