const Joi = require('joi');

const validate = (schema) => (payload) =>{
    return schema.validate(payload,{abortEarly: false});
}

const userValidateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    picture: Joi.string().required()
});




exports.userValidate = validate(userValidateSchema)
