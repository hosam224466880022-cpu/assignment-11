import Joi from "joi";

export const messageSchema = Joi.object({

  text: Joi.string().min(2).max(500).required()

});