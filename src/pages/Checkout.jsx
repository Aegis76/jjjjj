import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, Ticket, ChevronRight } from 'lucide-react';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'India',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'Uttarakhand',
    pinCode: '',
    phone: '',
    email: '',
    couponCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp/Email
    const itemsDescription = cartItems.map(item => 
      `• ${item.variantName} (${item.roomName}) x ${item.quantity} - ${item.price}`
    ).join('\n');

    const message = `*Phoenix Corbett - New Booking Request*\n` +
      `----------------------------------------\n` +
      `*Customer:* ${formData.firstName} ${formData.lastName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Location:* ${formData.city}, ${formData.state}\n\n` +
      `*Reservations:* \n${itemsDescription}\n\n` +
      `*Total Amount:* ₹${cartTotal.toLocaleString()}\n` +
      `----------------------------------------\n` +
      `Request sent from Phoenix Corbett Website.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918439213173?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    alert('Thank you! Your booking request has been generated and sent via WhatsApp to our concierge (+91 8439213173). We have also logged your request for navinpana@gmail.com. We will contact you shortly.');
    
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container checkout-empty">
        <h2>Your selection is empty</h2>
        <p>Please select a room before proceeding to checkout.</p>
        <Link to="/rooms" className="btn btn-primary">Browse Rooms</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <nav className="checkout-breadcrumb">
          <Link to="/">Home</Link> <ChevronRight size={14} />
          <Link to="/rooms">Rooms</Link> <ChevronRight size={14} />
          <span>Checkout</span>
        </nav>

        <h1 className="checkout-title">Checkout</h1>

        <div className="coupon-alert">
          <Ticket size={20} className="icon" />
          <p>Have a coupon? <button onClick={() => document.getElementById('coupon-input').focus()}>Click here to enter your code</button></p>
        </div>

        <form onSubmit={handleSubmit} className="checkout-grid">
          <div className="billing-details">
            <h3>Billing details</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>First name <span>*</span></label>
                <input 
                  type="text" 
                  name="firstName" 
                  required 
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Last name <span>*</span></label>
                <input 
                  type="text" 
                  name="lastName" 
                  required 
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Company name (optional)</label>
              <input 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Country / Region <span>*</span></label>
              <select name="country" value={formData.country} onChange={handleInputChange}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Dubai">Dubai</option>
              </select>
            </div>

            <div className="form-group">
              <label>Street address <span>*</span></label>
              <input 
                type="text" 
                name="streetAddress" 
                placeholder="House number and street name" 
                required 
                value={formData.streetAddress}
                onChange={handleInputChange}
                style={{ marginBottom: '15px' }}
              />
              <input 
                type="text" 
                name="apartment" 
                placeholder="Apartment, suite, unit, etc. (optional)" 
                value={formData.apartment}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Town / City <span>*</span></label>
              <input 
                type="text" 
                name="city" 
                required 
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>State <span>*</span></label>
              <select name="state" value={formData.state} onChange={handleInputChange}>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>

            <div className="form-group">
              <label>PIN Code <span>*</span></label>
              <input 
                type="text" 
                name="pinCode" 
                required 
                value={formData.pinCode}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Phone <span>*</span></label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Email address <span>*</span></label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group" id="coupon-input-wrapper">
              <label>Coupon Code</label>
              <input 
                id="coupon-input"
                type="text" 
                name="couponCode" 
                placeholder="PROMO2026"
                value={formData.couponCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="order-summary">
            <div className="summary-card">
              <h3>Your order</h3>
              
              <div className="summary-table">
                <div className="table-header">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                
                <div className="order-items">
                  {cartItems.map((item) => (
                    <div key={item.variantId} className="order-item">
                      <span className="item-details">
                        {item.variantName} ({item.roomName}) × {item.quantity}
                      </span>
                      <span className="item-price">
                        ₹{(parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity).toLocaleString()}.00
                      </span>
                    </div>
                  ))}
                </div>

                <div className="total-row subtotal">
                  <span>Subtotal</span>
                  <strong>₹{cartTotal.toLocaleString()}.00</strong>
                </div>
                
                <div className="total-row grand-total">
                  <span>Total</span>
                  <strong>₹{cartTotal.toLocaleString()}.00</strong>
                </div>
              </div>

              <div className="payment-method">
                <div className="payment-label">
                  <CreditCard size={18} />
                  <span>Pay by Razorpay</span>
                  <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="razorpay-logo" />
                </div>
                <div className="payment-info">
                  <p>Pay securely by Credit or Debit card or Internet Banking through Razorpay.</p>
                </div>
              </div>

              <p className="privacy-text">
                Your personal data will be used to process your order, support your experience throughout this website, 
                and for other purposes described in our <Link to="/about">privacy policy</Link>.
              </p>

              <button type="submit" className="btn btn-primary submit-booking">
                Confirm Booking
              </button>

              <div className="secure-badge">
                <ShieldCheck size={16} />
                <span>Secure SSL Encrypted Transaction</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
