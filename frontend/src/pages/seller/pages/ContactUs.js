// ContactUs.jsx
import {React, useState} from 'react';
import { FaPhone } from 'react-icons/fa';
import { RiMapPin2Fill, RiMailFill } from 'react-icons/ri';
import '../../../assets/css/contactUs.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import Footter from '../Footter';
//axios.defaults.withCredentials=true;

import image8 from '../../../assets/images/image8.png'
const ContactUs = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',

  });

  //handle change event
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    
      const data = new FormData();

      
      data.append('fullName', formData.fullName);
      data.append('message', formData.message);  
      data.append('email', formData.email);
     

      try {
        const response = axios.post('http://localhost:5001/footer/add-footer', data);
        console.log(response.data);
          alert('Do you want to submit')
          toast.info('footer form submitted successfully!');
          // await  window.location.reload()
      } catch (errors) {
        console.error('Error:', errors.message);
        toast.error('An error occurred while submitting footer form.');
      }
    
  };

  return (
  <>
    <div>
    <div style={{boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', paddingBottom:"5%", marginTop:"60px"}}>
        <h1 style={{marginLeft:"5%", color:'orange'}}>Contact Information</h1>
        <div  title="Click here to visit more" style={{ width: '100%', height: '40%', display:"inline" }}>
          <div style={{fontSize:"20px", display:"inline", marginLeft:"5%", color:'#11676d'}}><FaPhone/>+251961269515</div>
          <div style={{fontSize:"20px", display:"inline", marginLeft:"15%", color:'#11676d'}}><RiMailFill />adaneeshete560@gmail.com</div>
          <div style={{fontSize:"20px", display:"inline", marginLeft:"15%", color:'#11676d'}}><RiMapPin2Fill />Addis Ababa, Ethiopia</div>

        </div>
    </div>
    <div className="contact-container" style={{marginTop: "0px"}}>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form method='POST'  onSubmit={handleSubmit} encType='multipart/form-data' >
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="fullName" name="fullName" 
            required 
           
            value={formData.fullName}
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" 
            required 
         
            value={formData.email}
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" 
            required
          
            value={formData.message}
            onChange={handleChange}></textarea>
          </div>
          <button
  style={{
    backgroundColor: '#ff8e2c',
    color: '#ffffff',
    padding: '12px 25px',
    borderRadius: '30px',
    border: "none",
    fontSize: '16px',
    transition: 'background-color 0.3s ease', // Add transition for a smooth effect
  }}
  type="submit"
  onMouseOver={(e) => (e.target.style.backgroundColor = '#16676d')}
  onMouseOut={(e) => (e.target.style.backgroundColor = '#ff8e2c')}
>
  Send Message
</button>


        </form>
      </div>
      <div className="contact-map">
        <div>
       
         <img  src={image8} alt='inspre' style={{ width:"100%"}}/>
         
          
        </div>
      </div>
    </div>
   
    </div>
  <Footter/>
  </>
   
  );
};

export default ContactUs;
