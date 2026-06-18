import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for bookings and inquiries.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <SectionTitle
            title="We'd Love to Hear From You"
            subtitle="Get In Touch"
          />

          <div className="contact-grid">
            <div className="contact-info-cards">
              <div className="info-card">
                <MapPin className="icon" />
                <div>
                  <h4>Our Location</h4>
                  <p>Awala Khot, Kotabagh, Uttarakhand 263159</p>
                </div>
              </div>
              <div className="info-card">
                <Phone className="icon" />
                <div>
                  <h4>Phone Number</h4>
                  <p>+919761420066</p>
                  <p>+919411197491</p>
                </div>
              </div>
              <div className="info-card">
                <Mail className="icon" />
                <div>
                  <h4>Email Address</h4>
                  <p>info@corbettphoenix.com</p>
                  <p>navinpana@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <Send size={18} style={{ marginLeft: "10px" }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <div className="map-overlay">
              <MapPin size={40} color="var(--accent-color)" />
              <p>Phoenix Corbett - Awala Khot, Kotabagh</p>
              <a
                href="#"
                className="btn btn-outline"
                style={{ color: "white", borderColor: "white" }}
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
