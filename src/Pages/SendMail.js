import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export  const SendMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p0492fq', 'template_hysef9q', form.current, 'user_NCZiEsz50dB5kjWGfQKbX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <br></br>
      <label>Email</label>
      <input type="email" name="to_mail" />
      <br></br>

      <label>Message</label>
      <textarea name="message" />
      <br></br>

      <input type="submit" value="Send" />
    </form>
  );
};