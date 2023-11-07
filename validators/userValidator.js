import Joi from "joi";

let userValidator= Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': "Email required",
        'string.email': 'Must be a email!'
    }),
    password: Joi.string().min(8).required().messages({
        'any.required': "Password required",
        'string.min': 'Password must be at least 8 characters!'
    })
})
export default userValidator