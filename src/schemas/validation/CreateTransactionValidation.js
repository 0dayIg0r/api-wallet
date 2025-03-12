import Joi from "joi";

export const createTransactionValidation = Joi.object({
    
    value: Joi.number().required(),
    description: Joi.string().required().min(3),
    type: Joi.string().required().valid('input', 'output'),
    createadAt: Joi.string()
    
    
})