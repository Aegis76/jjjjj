import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <h3 className="footer-logo">
                PHOENIX <span>CORBETT</span>
              </h3>
              <p className="footer-desc">
                Nestled in the heart of Uttarakhand, we offer the perfect blend
                of wilderness adventure and refined luxury.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="/about">Our Story</Link>
                </li>
                <li>
                  <Link to="/contact">Book Now</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Experience</h4>
              <ul>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/activities">Activities</Link>
                </li>
                <li>
                  <Link to="/contact">Inquiries</Link>
                </li>
                <li>
                  <Link to="/">Gallery</Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact</h4>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Kotabag,Awala Khot,Nainital,Uttarakhand-263159</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 9761420066</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@corbettphoenix.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Phoenix Corbett. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
