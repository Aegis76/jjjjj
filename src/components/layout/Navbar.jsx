import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../ui/CartDrawer.jsx";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${location.pathname !== "/" ? "solid" : ""}`}
    >
      <div className="container nav-content">
        <Link to="/" className="logo">
          CORBETT <span>PHOENIX</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/rooms"
            className={location.pathname === "/rooms" ? "active" : ""}
          >
            Rooms
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/activities"
            className={location.pathname === "/activities" ? "active" : ""}
          >
            Activities
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
          <div className="nav-actions">
            <button
              className="cart-trigger"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <Link to="/rooms" className="btn btn-primary nav-btn">
              Book Now
            </Link>
          </div>
        </div>

        <div className="mobile-actions">
          <button
            className="cart-trigger mobile"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <CartDrawer />
    </nav>
  );
};

export default Navbar;
