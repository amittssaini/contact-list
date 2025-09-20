const schema = require('../validations/contact.validate');

const validateSchema = (req,res,next)=>{
    console.log("in the middleware")
    const {error} = schema.validate(req.body);
    if(error)
        return res.status(400).json({"message":error.details[0].message})
    next();
}

module.exports =validateSchema;