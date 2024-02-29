const express = require('express')

const {createQuery,addComments} = require('../Controllers/CommuityController')

const CommunityRouter = express.Router();

CommunityRouter.post("/postQuery",createQuery)
CommunityRouter.put("/comments/:id",addComments)



module.exports = CommunityRouter;