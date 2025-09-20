const Contact = require("../services/contact.service");
const contactServiceInstace = new Contact();


const postContact=async(req,res)=>{
    try {
        console.log("data ",req.body);
        const result = await contactServiceInstace.postContact(req.body);
        if(!result)
            res.status(400).json({"sucess":false,message:"data is not saved"})
         res.status(201).json({"sucess":true,message:"data saved sucessfully","data":result})
    } catch (error) {
        res.status(500).json({error:error,message:"something went wrong"})
    }
}

const getContact = async(req,res)=>{
    try {
        const result = await contactServiceInstace.getContact();
        if(!result)
            res.status(400).json({"sucess":false,message:"data is not fetched"})
        res.status(200).json({"sucess":true,message:"data fetched sucessfully","data":result})
    } catch (error) {
        res.status(500).json({error:error,message:"something went wrong"})
    }
}

const deleteContact=async(req,res)=>{
    try {
        
        const {id} = req.params;
        console.log(id);
        const result = await contactServiceInstace.deleteContact(id);
        if(!result)
            res.status(400).json({"sucess":false,message:"Contact is not  deleted"})
        res.status(200).json({"sucess":true,message:"Contact is deleted Sucessfully","data":result})
    } catch (error) {
        res.status(500).json({error:error,message:"something went wrong"})
    }
}

module.exports = {postContact,getContact,deleteContact};