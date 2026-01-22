import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          console.error(error);
          alert('Failed to send email');
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
