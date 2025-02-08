import { useState } from "react";
// import "../../styles/contact.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = () => {
    alert("Form Submitted!");
  };

  return (
    <div className='form-container'>
      <div className='form'>
        <span className='heading'>Contact Us</span>

        
          <input placeholder='Name' type='text' class='input' />
        <input placeholder='Mobile' id='mobile' type='tel' class='input' />
        <input placeholder='Email' id='mail' type='email' class='input' />
        <textarea
          placeholder='Say Hello'
          rows='10'
          cols='30'
          id='message'
          name='message'
          class='textarea'
        />
        <div className='button-container'>
          <div className='send-button'>Submit</div>
          <div className='reset-button-container'></div>
        </div>
      </div>
    </div>
  )
};

export default ContactForm;
