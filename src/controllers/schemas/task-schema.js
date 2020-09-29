const Joi = require('joi');

const taskSchema = Joi.object({
    description: Joi.string()
        .required(),

    done: Joi.boolean()
        .optional()
});

module.exports = taskSchema;
