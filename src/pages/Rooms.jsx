import React from 'react';
import SectionTitle from '../components/common/SectionTitle.jsx';
import RoomCard from '../components/ui/RoomCard.jsx';
import { rooms } from '../data/rooms.js';
import '../styles/Rooms.css';

const Rooms = () => {
  return (
    <div className="rooms-page">
      <section className="page-hero rooms-hero">
        <div className="container">
          <h1>Our Rooms & Suites</h1>
          <p>Find your perfect sanctuary in the heart of nature.</p>
        </div>
      </section>

      <section className="rooms-list">
        <div className="container">
          <SectionTitle 
            title="Luxurious Retreats" 
            subtitle="Accommodation" 
          />
          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="rooms-info">
        <div className="container info-grid">
          <div className="info-item">
            <h3>Check-in / Check-out</h3>
            <p>Check-in: 02:00 PM</p>
            <p>Check-out: 11:00 AM</p>
          </div>
          <div className="info-item">
            <h3>Reservation Policy</h3>
            <p>A 50% advance payment is required to confirm your booking.</p>
          </div>
          <div className="info-item">
            <h3>Pet Policy</h3>
            <p>We are a pet-friendly resort! Please inform us in advance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
