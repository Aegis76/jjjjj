import React from 'react';
import { Spade, Utensils, Bell, Flame, Wifi, Car, Coffee, ShieldCheck } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle.jsx';
import { services } from '../data/services.js';
import '../styles/Services.css';

const Services = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Spade': return <Spade size={40} />;
      case 'Utensils': return <Utensils size={40} />;
      case 'Bell': return <Bell size={40} />;
      case 'Flame': return <Flame size={40} />;
      default: return <ShieldCheck size={40} />;
    }
  };

  const extraServices = [
    { name: "Free Wi-Fi", icon: <Wifi size={30} />, desc: "High-speed internet throughout the property." },
    { name: "Safe Parking", icon: <Car size={30} />, desc: "Secure parking space for your vehicles." },
    { name: "Morning Coffee", icon: <Coffee size={30} />, desc: "Freshly brewed local coffee delivered to your room." },
    { name: "24/7 Security", icon: <ShieldCheck size={30} />, desc: "Round-the-clock security for your peace of mind." },
  ];

  return (
    <div className="services-page">
      <section className="page-hero services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>World-class hospitality in the lap of nature.</p>
        </div>
      </section>

      <section className="main-services">
        <div className="container">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Hospitality" 
          />
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-detail-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} referrerPolicy="no-referrer" />
                  <div className="service-icon-overlay">
                    {getIcon(service.icon)}
                  </div>
                </div>
                <div className="content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="extra-services">
        <div className="container">
          <div className="extra-grid">
            {extraServices.map((service, index) => (
              <div key={index} className="extra-item">
                <div className="extra-icon">{service.icon}</div>
                <h4>{service.name}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dining-highlight">
        <div className="container dining-grid">
          <div className="dining-content">
            <SectionTitle 
              title="Culinary Excellence" 
              subtitle="Dining" 
              align="left"
            />
            <p>
              Our restaurant offers a farm-to-table experience, featuring ingredients sourced from local 
              Uttarakhand villages. Enjoy traditional Kumaoni delicacies alongside international favorites.
            </p>
            <p>
              Experience a starlit dinner on our rooftop terrace or a private lunch by the riverside.
            </p>
          </div>
          <div className="dining-image">
            <img src="https://picsum.photos/seed/dining/800/600" alt="Dining Experience" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
