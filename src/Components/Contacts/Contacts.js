import React from 'react';
import { useState } from 'react';
import './Contacts.css';
import emailjs from 'emailjs-com';
import { CiMail } from 'react-icons/ci';
import { CiMapPin } from "react-icons/ci";



function ContactSection() {

    const [emailSent, setEmailSent] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    }); // State to manage form values

    const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ecnxdd4', 'template_92j2com', e.target, 'etzwnpie_ypVszNAh')
          .then((result) => {
              console.log(result.text);
              setEmailSent(true);
              setTimeout(() => setEmailSent(false), 5000);
          }, (error) => {
              console.log(error.text);
          });

          setEmailSent(true);
          // Reset form fields
          setFormValues({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setTimeout(() => setEmailSent(false), 5000);
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues(prevState => ({
          ...prevState,
          [name]: value
      }));
  };


    const handleEmailCopy = async () => {
      try {
        await navigator.clipboard.writeText('myemail@gmail.com');
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Hide tooltip after 2 seconds
      } catch (err) {
        setCopySuccess('Failed to copy!');
      }
    }
    return (
      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact <br /> Information</h2>
          <div className="address-info">
            <CiMapPin className="address-icon" />
            <div className="address-text">
                Rua da Bela Vista, 106 <br/>
                4820-174, Fafe
            </div>
          </div>
          <div className="email-info" onClick={handleEmailCopy}>
          <CiMail className="email-icon"/>
          <span>pedromiguelabreuramos@gmail.com</span>
          {copySuccess && (
              <div className="tooltip">{copySuccess}</div>
          )}
        </div>
          <div className="social-media">
          </div>
        </div>
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" id="name" name="name" placeholder="Your name" value={formValues.name} onChange={handleChange} />
                    <input type="email" id="email" name="email" placeholder="Your Email" required value={formValues.email} onChange={handleChange} />
                </div>
                <input type="text" id="subject" name="subject" placeholder="Subject" value={formValues.subject} onChange={handleChange} />
                <textarea id="message" name="message" placeholder="Message" value={formValues.message} onChange={handleChange}></textarea>
                <button type="submit" className="send-button" disabled={emailSent}>Send</button>
            </form>
            {emailSent && <p className="email-sent-message">Your email has been sent!</p>}
        </div>
      </div>
    );
  }
  
  export default ContactSection;