const router = require('express').Router();
const {getContact,postContact,deleteContact} = require("../controllers/contact.controller")
const validateSchema=require("../middlewares/contact.middlware")
router.post('/',validateSchema,postContact);
router.get('/',getContact);
router.delete('/:id',deleteContact);

module.exports =router;