// Services.jsx
import React from 'react';
import img from './12.jpg'
import './Services.css';

const services = [
  { title: "Invitation Cards", description: "Description for Invitation Cards", icon: img },
  { title: "Hall & Seating Arrangement", description: "Description for Hall & Seating Arrangement", icon: "path/to/hall-seating-arrangement-icon.png" },
  { title: "Cake Arrangement", description: "Description for Cake Arrangement", icon: "path/to/cake-arrangement-icon.png" },
  { title: "Entertainment", description: "Description for Entertainment", icon: "path/to/entertainment-icon.png" },
  { title: "Catering", description: "Description for Catering", icon: "path/to/catering-icon.png" },
  { title: "Decoration", description: "Description for Decoration", icon: "path/to/decoration-icon.png" },
  { title: "Photography", description: "Description for Photography", icon: "path/to/photography-icon.png" },
  { title: "Venue Selection", description: "Description for Venue Selection", icon: "path/to/venue-selection-icon.png" },
  { title: "Transport", description: "Description for Transport", icon: "path/to/transport-icon.png" }
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Birthday Party Management Services</h2>
      <div className="services-box">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description, icon }) => {
  return (
    <div className="service-item">
      <img src={icon} alt={title} className="service-icon" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Services;
