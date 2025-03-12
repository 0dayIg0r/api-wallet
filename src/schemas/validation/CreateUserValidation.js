import Joi from "joi";

export const createUserValidation = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    createdAt: Joi.string()
    
})