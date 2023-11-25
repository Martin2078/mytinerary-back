import Joi from "joi";

const registerValidator=Joi.object({
    email: Joi.string().email().required().messages({
        'string.required':'Email required!',
        'string.email':'Email must contain @xxxx.com!'
    }),
    password: Joi.string().required().messages({
        'string.required':'Password required!',
    }),
    name: Joi.string().required().messages({
        'string.required':'Name required!',
    }),
    surname: Joi.string().required().messages({
        'string.required':'Surname required!',
    }),
    photo: Joi.any()
})
export default registerValidator