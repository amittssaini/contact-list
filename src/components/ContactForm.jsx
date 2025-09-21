import axios from 'axios';
import React, { useState } from 'react'
import './ContactForm.css';
import { config } from '../App';
import { useSnackbar } from 'notistack';
const ContactForm = ({onContactAdded}) => {
    const [formData,setFormData]=useState({ name:"",email:"",mobile:""});
    const {enqueueSnackbar}=useSnackbar();
    const validationForm=(data)=>{
        if(data.name==="")
        {
            enqueueSnackbar("Name field is required ",{variant:"error"})
            return false;
        }
        else if(data.email==="")
        {
            enqueueSnackbar("Email field is required ",{variant:"error"})
            return false;
        }
        else if(data.mobile===""){
            enqueueSnackbar("Mobile field is required ",{variant:"error"})
            return false;
        }
        else if(data.mobile.length!==10)
        {
            enqueueSnackbar("Please Enter 10 digit mobile number ",{variant:"error"})
            return false;
        }
              return true;
    }
    const postFormData=async(data)=>{
        console.log("in the post data ",data);
        if(!validationForm(data)) return;
        try {
            const response = await axios.post(`${config.endpoint}`,{
                "name":data.name,"email":data.email,"mobile":data.mobile
            }) 
            if(response.status===201)
            {
                enqueueSnackbar("Data is added Sucessfully ",{variant:"success"})
                setFormData({
                    name:"",
                    email:"",
                    mobile:""
                })
                onContactAdded();
            }
        } catch (error) {
            console.log('ERROR IS OCCURED ',error)
        }
    }
    const handleChangeInput=(e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    const handleFormInput=(e)=>{
        e.preventDefault();
        postFormData(formData);
    }
  return (
  <div className="contact-form-container">
    <form  className="contact-form" onSubmit={handleFormInput}>
        <label htmlFor="name">Name:<input id='name' type='text' name='name' value={formData.name} onChange={handleChangeInput}/></label>
         <label htmlFor="email">Email:<input id='email' type='email' name='email' value={formData.email} onChange={handleChangeInput}/></label>
          <label htmlFor="mobile">Mobile:<input id='mobile' type='number' name='mobile' value={formData.mobile} onChange={handleChangeInput}/></label>
          <button type='submit'>ADD TO CONTACT</button>
    </form>
    </div>
  )
}

export default ContactForm