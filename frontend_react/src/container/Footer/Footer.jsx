import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import { AppWrap, MotionWrap } from'../../wrapper';
import { client } from '../../client'; 
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name:'', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })

  }
  
  return (
    <>
      <h2 className='head-text'>Have a seat and talk to me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href='mailto:klintkeown@gmail.com' className='p-text'> klintkeown@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <FontAwesomeIcon icon={faPhone} />
          <a href='tel: +1 (662) 545-9260' className='p-text'> (662)545-9260</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>  
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div> 
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div> 
        : <div>
          <h3 className='head-text'>Thanks for Getting in Touch</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)