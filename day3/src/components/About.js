// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <section id="about">
//       <div className="abouts">
//         <div>
//           <img src='https://images.pexels.com/photos/1243337/pexels-photo-1243337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{ maxWidth: '300px', maxHeight: '300px', border: '2px solid black' }}></img>
//         </div>
//         <div className="about-content">
//           <h2>About Us</h2>
//           <p>We are passionate about providing delicious food for all your special occasions. Our team is dedicated to delivering exceptional service to ensure your event is a memorable one.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// AboutUs.jsx
import React from 'react';
import './About.css';

const services = [
  {
    title: "SATISFACTION",
    description: "We work for customer contentment and not for money. This is the main reason for getting more clients and more events.",
    icon: "path/to/satisfaction-icon.png"
  },
  {
    title: "TRUSTWORTHY",
    description: "We are very reliable to all clients for organising an event. We also give suggestions for clients in planning the event according to their budget.",
    icon: "path/to/trustworthy-icon.png"
  },
  {
    title: "RELATIONSHIP",
    description: "We plan, research, deliver and evaluate every element of an event. We ensure client’s opinion at every touch point.",
    icon: "path/to/relationship-icon.png"
  },
  {
    title: "PLANNER",
    description: "We have our creation house spread in our area which helps us to design and develop the best plan suiting your event needs.",
    icon: "path/to/planner-icon.png"
  }
];

const About = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <div className="icon-box">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description, icon }) => {
  return (
    <div className="icon">
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default About;
