import React, { useEffect, useState } from 'react'
import { config } from '../App';
import axios from 'axios';
import './ContactList.css';
import ContactForm from './ContactForm';
const ContactList = () => {
    const [contactData,setContactData]=useState([]);
    const [page,setPage]=useState(1)
    const [totalPage,setTotalPage]=useState()
    const limit = 5;
    const fetchData=async(currentPage=1)=>{
        try {
            console.log("hello in the fetch function")
           // const response = await axios.get(`${config.endpoint}?page=${currentPage}&limit=${limit}`)
           const response = await axios.get(`${config.endpoint}?page=${currentPage}&limit=${limit}`)
            console.log(response.data)
            setContactData(response.data.data);
            console.log(response.data.pages);
            setTotalPage(response.data.pages)
            setPage(response.data.page)
            
        } catch (error) {
            
        }
    }
    const deleteContact=async(id)=>{
        try {
            const response = await axios.delete(`${config.endpoint}/${id}`)
            if(response.status===200)
            {
                fetchData();
            }
        } catch (error) {
            
        }

    }
    const handleNext=()=>{
        if(page<totalPage)
            setPage(page+1)
        console.log("page is ::",page)

    }

    const handlePrevious=()=>{
        if(page>1)
            setPage(page-1)
        console.log("page is :: ",page)
    }


    useEffect(()=>{
        fetchData(page);
    },[page])

  return (
    <>
    <div className='contact-page'>
        <h2>CONCTACT DASHBOARD</h2>
    <ContactForm onContactAdded={()=>fetchData()}/>
    <div className="contact-list-container">
      <h2>Contact List</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map(contact => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>
                <button 
                  className="delete-btn" 
                  onClick={() => deleteContact(contact._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={page === 1}>Prev</button>
        <span>Page {page} of {totalPage}</span>
        <button onClick={handleNext} disabled={page === totalPage}>Next</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default ContactList