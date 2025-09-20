const Joi = require('joi');
const schema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required().messages({"string.pattern.base": "Email must be valid email address"}),
     mobile: Joi.string().pattern(/^[0-9]{10}$/).required().messages({"string.pattern.base": "Mobile number must be exactly 10 digits"})
})
module.exports = schema;