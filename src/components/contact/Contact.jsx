import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SlSocialInstagram} from 'react-icons/sl'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_xpdwg3b', 'template_wcff5bu', form.current, 'Z6YO0CJBzktRc_66e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* CONTACT OPTIONS */}
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>shufimuhammad013@gmail.com</h5>
            <a href="mailto:shufimuhammad013@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <SlSocialInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>nmshufi</h5>
            <a href="https://instagram.com/nmshufi" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {/* END FORM */}
      </div>
    </section>
  )
}

export default Contact