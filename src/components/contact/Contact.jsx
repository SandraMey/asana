import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import "./contact.scss";

function Contact() {

    const form = useRef();

    const [message, setMessage] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)

        emailjs.sendForm(
          process.env.REACT_APP_SERVICES,
          process.env.REACT_APP_TEMPLATE,
          form.current,
          process.env.REACT_APP_USER,
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }


    return (
      <div className="contact" id="contact">
      <div className="right">
          <h2>Contact</h2>
          <form ref={form} onSubmit={handleSubmit}>
              <input type="test" placeholder="Nom" name="user_name" required/>
              <input type="test" placeholder="Email" name="user_email" required/>
              <textarea placeholder="Message" name="message"/>
              <button type="submit" >Envoyer</button>
              {message && <span>Merci, je vous répond très vite </span>}
          </form>
      </div>
  </div>
    )
}

export default Contact