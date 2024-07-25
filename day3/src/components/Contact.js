// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact">
//       <div className="contact-content">
//         <h2>Contact Us</h2>
//         <p>Get in touch with us:</p>
//         <p>Email: info@cateringservice.com</p>
//         <p>Phone: 123-456-7890</p>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    
    <div className="contact-container">
      <ContactInfo />
      <ContactForm />
    </div>
  
);
};

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Contact Us</h3>
      <p><strong>Email:</strong> info@example.com</p>
      <p><strong>Phone:</strong> +123 456 7890</p>
      <p><strong>Address:</strong> 123 Party St, Celebration City, Joyland</p>
             <div className="social-icons">
                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                 <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
               </div>
      
      </div>
  );
};

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

