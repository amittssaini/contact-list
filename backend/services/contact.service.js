const contactModel = require("../models/contact.model");

class Contact{
   async postContact(contact){
        try {
            const contactDoc = new contactModel(contact);
            const result = await contactDoc.save();
            return result
        } catch (error) {
            
        }
    }
    async getContact(){
        try {
            const result = await contactModel.find({});
            return result;
        } catch (error) {
            return error;
            
        }
    }

    async deleteContact(id){
        try {
            console.log("id::",id);
            const result = await contactModel.findByIdAndDelete(id);
            console.log(result)
            return result;
        } catch (error) {
            return error;
            
        }

    }
}

module.exports =Contact;