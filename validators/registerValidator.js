import Joi from "joi";

const registerValidator=Joi.object({
    email: Joi.string().email().required().messages({
        'string.required':'Email required!',
        'string.email':'Email must contain @xxxx.com!'
    }),
    password: Joi.string().required().messages({
        'string.required':'Password required!',
    }),
    photo: Joi.string().uri().required().messages({
        'string.required':'Photo required!',
        'string.uri':'Photo must be a string!'
    }),
    name: Joi.string().required().messages({
        'string.required':'Name required!',
    }),
    surname: Joi.string().required().messages({
        'string.required':'Surname required!',
    }),
    date: Joi.date().required().messages({
        'date.required':'Date required!',
    }),
})
export default registerValidator