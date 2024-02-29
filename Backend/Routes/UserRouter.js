const express = require('express')

const {getOneUser,createUser} = require('../Controllers/UserController')

const UserRouter = express.Router();

UserRouter.get("/:id", getOneUser);
UserRouter.post("/user", createUser);

module.exports = UserRouter;