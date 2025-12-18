import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
   PORT:     Joi.number().default(3000),
   MONGODB:  Joi.required(),
   NODE_ENV: Joi.required(),
})