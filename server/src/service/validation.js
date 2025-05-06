const Joi = require('joi')
module.exports = validationSchemas = {

    factorial: Joi.object({
        n: Joi.number().integer().min(0).required()
        .messages({
          'number.base': 'Параметр n должен быть числом',
          'number.integer': 'Параметр n должен быть целым числом',
          'number.min': 'Параметр n не может быть отрицательным',
          'any.required': 'Параметр n обязателен'
        })
    }),
    fibonacci: Joi.object({
        n: Joi.number().integer().min(0).required()
        .messages({
          'number.base': 'Параметр n должен быть числом',
          'number.integer': 'Параметр n должен быть целым числом',
          'number.min': 'Параметр n не может быть отрицательным',
          'any.required': 'Параметр n обязателен'
        })
    }),
    base: Joi.object({
        calc_type: Joi.string().valid('calc_factorial', 'calc_fibonacci').required()
        .messages({
          'string.base': 'Параметр calc_type должен быть строкой',
          'any.only': 'Недопустимый тип расчета',
          'any.required': 'Параметр calc_type обязателен'
        }),
        n: Joi.number().integer().min(0).required()
        .messages({
          'number.base': 'Параметр n должен быть числом',
          'number.integer': 'Параметр n должен быть целым числом',
          'number.min': 'Параметр n не может быть отрицательным',
          'any.required': 'Параметр n обязателен'
        })
    })
  };