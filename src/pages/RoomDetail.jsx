import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Check,
  ArrowLeft,
  BedDouble,
  User,
  Hotel,
  ShieldCheck,
} from "lucide-react";
import { rooms } from "../data/rooms";
import { useCart } from "../context/CartContext";
import "../styles/RoomDetail.css";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const { addToCart, setIsCartOpen } = useCart();

  useEffect(() => {
    const foundRoom = rooms.find((r) => r.id === parseInt(id));
    setRoom(foundRoom);
    window.scrollTo(0, 0);
  }, [id]);

  if (!room) {
    return (
      <div
        className="container"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <h2>Room Category Not Found</h2>
        <Link
          to="/rooms"
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
        >
          Back to Rooms
        </Link>
      </div>
    );
  }

  const handleAddToCart = (variant) => {
    addToCart({
      roomId: room.id,
      roomName: room.name,
      variantId: variant.id,
      variantName: variant.name,
      price: variant.price,
      image: variant.image || room.image,
    });
  };

  const handleBookNow = (variant) => {
    handleAddToCart(variant);
    setIsCartOpen(true);
  };

  return (
    <div className="room-detail-page">
      <section
        className="room-hero"
        style={{ backgroundImage: `url(${room.image})` }}
      >
        <div className="container">
          <Link to="/rooms" className="back-link">
            <ArrowLeft size={20} /> Back to Selection
          </Link>
          <div className="hero-text">
            <span>The Collection</span>
            <h1>{room.name}</h1>
          </div>
        </div>
      </section>

      <section className="room-info">
        <div className="container grid-layout">
          <div className="main-info">
            <div className="description-block">
              <h3>Bespoke Luxury</h3>
              <p>{room.description}</p>
              <p>
                The {room.name} represents the pinnacle of wilderness
                architecture. Each unit is positioned to capture the golden hour
                through floor-to-ceiling windows, while maintaining complete
                acoustic privacy from the surrounding trails.
              </p>
            </div>

            <div className="amenities-block">
              <h4>Standard Amenities</h4>
              {/* <ul className="amenities-list">
                {room.features.map((feature, index) => (
                  <li key={index}><Check size={16} color="#c8a97e" /> {feature}</li>
                ))} */}
              <li>
                <Check size={16} color="#c8a97e" /> Turndown Service
              </li>
              <li>
                <Check size={16} color="#c8a97e" /> Private Butler
              </li>
              {/* </ul> */}
            </div>
          </div>

          <div className="booking-sticky">
            <div className="booking-header">
              <ShieldCheck size={24} color="#c8a97e" />
              <span>Certified Safe Stay</span>
            </div>
            <p className="sticky-desc">
              Starting from {room.price} per night. Choose your preferred layout
              below.
            </p>
            <div className="sticky-stats">
              <div className="stat">
                <strong>4.9</strong>
                <span>Rating</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Privacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="room-variants">
        <div className="container">
          <div className="section-header">
            <span>Choose Your Layout</span>
            <h2>Available Room Types</h2>
            <p>
              Select the configuration that best suits your vision of comfort.
            </p>
          </div>

          <div className="variants-grid">
            {room.variants.map((variant) => (
              <div key={variant.id} className="variant-card">
                <div className="variant-image-wrapper">
                  <img
                    src={variant.image}
                    alt={variant.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="variant-type-overlay">{variant.type}</div>
                </div>

                <div className="variant-card-content">
                  <div className="variant-header">
                    <div className="variant-icon">
                      {variant.type.includes("King") ? (
                        <Hotel size={24} />
                      ) : variant.type.includes("Single") ? (
                        <User size={24} />
                      ) : (
                        <BedDouble size={24} />
                      )}
                    </div>
                    <div className="variant-title">
                      <h4>{variant.name}</h4>
                    </div>
                  </div>

                  <div className="variant-body">
                    <ul className="variant-amenities">
                      {variant.amenities.map((amenity, idx) => (
                        <li key={idx}>
                          <Check size={14} /> {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="variant-footer">
                    <div className="variant-price">{variant.price}</div>
                    <div className="variant-actions">
                      <button
                        className="btn btn-outline cart-btn"
                        onClick={() => handleAddToCart(variant)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-primary book-btn"
                        onClick={() => handleBookNow(variant)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner room-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Arrangement?</h2>
            <p>
              Our concierge can tailor the room layout to your specific
              requirements.
            </p>
            <Link
              to="/contact"
              className="btn btn-outline"
              style={{ borderColor: "white", color: "white" }}
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;
