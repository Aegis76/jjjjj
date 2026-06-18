import React from 'react';
import SectionTitle from '../components/common/SectionTitle.jsx';
import { activities } from '../data/activities.js';
import '../styles/Activities.css';

const Activities = () => {
  return (
    <div className="activities-page">
      <section className="page-hero activities-hero">
        <div className="container">
          <h1>Activities</h1>
          <p>Adventure and discovery in the Himalayan foothills.</p>
        </div>
      </section>

      <section className="activities-list">
        <div className="container">
          <SectionTitle 
            title="Unforgettable Experiences" 
            subtitle="Adventures" 
          />
          
          <div className="activities-container">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`activity-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="activity-img">
                  <img src={activity.image} alt={activity.name} referrerPolicy="no-referrer" />
                </div>
                <div className="activity-info">
                  <span className="num">0{index + 1}</span>
                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>
                  <p className="detailed-desc">
                    Whether you are a thrill-seeker or looking for a peaceful escape, our {activity.name.toLowerCase()} 
                    is designed to give you a deep connection with the nature of Corbett. Led by experienced guides, 
                    safety and engagement are our top priorities.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="outdoor-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Experience the Wilderness</h2>
            <p>Our concierge team is happy to help you plan your perfect day in the wild.</p>
            <button className="btn btn-primary">Book an Activity</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
