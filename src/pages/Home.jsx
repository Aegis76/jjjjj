import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Spade,
  Utensils,
  Bell,
  Flame,
  CheckCircle,
} from "lucide-react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import RoomCard from "../components/ui/RoomCard.jsx";
import { rooms } from "../data/rooms.js";
import { services } from "../data/services.js";
import { activities } from "../data/activities.js";
import "../styles/Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/Images/nainital.jpg",
      title: "Phoenix Corbett",
      subtitle: "Discover Our Stunning Accommodations",
    },
    {
      image: "/Images/nainital.jpg",
      title: "In The Nature",
      subtitle: "Experience Nature Like Never Before",
    },
    {
      image: "/Images/nainital.jpg",
      title: "Corbett Phoenix",
      subtitle: "Find Your Peace in the Heart of Uttarakhand",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Spade":
        return <Spade size={40} />;
      case "Utensils":
        return <Utensils size={40} />;
      case "Bell":
        return <Bell size={40} />;
      case "Flame":
        return <Flame size={40} />;
      default:
        return <CheckCircle size={40} />;
    }
  };

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="container hero-content">
              <span>
                {index === 0 ? "Exclusive Wilderness" : "Serene Escape"}
              </span>
              <h1>
                {slide.title.replace(
                  "Phoenix Corbett",
                  "Discover Our Stunning Accommodations",
                )}
              </h1>
              <p>
                {index === 0
                  ? "Phoenix Corbett was born from a vision to create a serene retreat nestled in the heart of nature. Located in the majestic foothills of Kotabagh, we offer a seamless blend of luxury and raw wilderness."
                  : slide.subtitle}
              </p>
              <div className="action-row">
                <Link
                  to="/rooms"
                  className="btn btn-primary"
                  style={{ padding: "16px 40px" }}
                >
                  Explore Rooms
                </Link>
                <Link
                  to="/about"
                  className="btn btn-outline"
                  style={{ marginLeft: "20px" }}
                >
                  Our Story
                </Link>
              </div>
            </div>
            {index === 0 && (
              <div className="hero-visual-card">
                <h3>The Royal Suite</h3>
                <p>
                  Experience panoramic views of the Uttarakhand valley with
                  bespoke services and luxury amenities.
                </p>
                <div
                  style={{
                    color: "var(--accent-color)",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  From ₹1,000 / Night
                </div>
              </div>
            )}
          </div>
        ))}

        <button className="slider-btn prev" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <div className="container intro-grid">
          <div className="intro-image">
            <img
              src="/Images/nainital3.jpg"
              alt="Resort Intro"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="intro-content">
            <SectionTitle
              title="Welcome to Corbett Phoenix"
              subtitle="Our Story"
              align="left"
            />
            <p>
              Nestled in the lush greens of Awala Khot, Kotabagh, just a short
              drive from the enchanting Corbett National Park, Phoenix Corbet is
              a tranquil escape for nature lovers, adventure seekers, and those
              looking to disconnect from the hustle of city life.
            </p>
            <p>
              Surrounded by the majestic hills of Nainital and the serene
              landscapes of Uttarakhand, our hotel blends rustic charm with
              modern comfort, offering a unique experience that rejuvenates your
              body, mind, and soul.
            </p>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="featured-rooms">
        <div className="container">
          <SectionTitle
            title="Our Premium Stays"
            subtitle="Choose Your Sanctuary"
          />
          <div className="rooms-grid">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link to="/rooms" className="btn btn-outline">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <SectionTitle title="Premium Hospitality" subtitle="Our Services" />
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{getIcon(service.icon)}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="activities-preview">
        <div className="container">
          <SectionTitle title="Explore the Wild" subtitle="Adventures Await" />
          <div className="activities-grid">
            {activities.map((activity) => (
              <Link
                to="/activities"
                key={activity.id}
                className="activity-card"
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  referrerPolicy="no-referrer"
                />
                <div className="activity-overlay">
                  <h3>{activity.name}</h3>
                  <span>View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <SectionTitle
                title="What Makes Us Special"
                subtitle="Why Choose Us"
                align="left"
              />
              <div className="features-list">
                <div className="feature-item">
                  <CheckCircle className="icon" />
                  <div>
                    <h4>Eco-friendly Stay</h4>
                    <p>Cozy and spacious rooms with scenic view</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="icon" />
                  <div>
                    <h4>Local Experience</h4>
                    <p>Proximity to Corbett Tiger Reserve and nature trails</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="icon" />
                  <div>
                    <h4>Peaceful Location</h4>
                    <p>
                      Deal for family vacations, solo retreats, and intimate
                      gatherings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-image">
              <img
                src="https://picsum.photos/seed/whyus/800/600"
                alt="Special Experience"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for an Unforgettable Experience?</h2>
            <p>
              Book your stay today and discover the magic of Phoenix Corbett.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>

      {/* Theme Decorative Elements */}
      <div className="location-marker">
        <div className="dot"></div>
        Awala Khot, Kotabagh, Uttarakhand, India
      </div>

      <div className="info-bar">
        <div className="info-item">
          <span className="info-label">Distance</span>
          <span className="info-value">15km from Safari Gate</span>
        </div>
        <div className="info-item">
          <span className="info-label">Eco Rating</span>
          <span className="info-value">Platinum Certified</span>
        </div>
        <div className="info-item">
          <span className="info-label">Guest Rating</span>
          <span className="info-value">4.9 / 5.0 Exceptional</span>
        </div>
        <div className="info-item">
          <span className="info-label">Dining</span>
          <span className="info-value">Farm-to-Table Experience</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
