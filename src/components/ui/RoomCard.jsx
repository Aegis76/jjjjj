import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/RoomCard.css';

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <div className="room-image">
        <img src={room.image} alt={room.name} referrerPolicy="no-referrer" />
        <div className="room-price">{room.price} <span>/ Night</span></div>
      </div>
      <div className="room-content">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <div className="room-features">
          {room.features.slice(0, 3).map((feature, index) => (
            <span key={index}>{feature}</span>
          ))}
        </div>
        <Link to={`/rooms/${room.id}`} className="room-btn">View Details</Link>
      </div>
    </div>
  );
};

export default RoomCard;
