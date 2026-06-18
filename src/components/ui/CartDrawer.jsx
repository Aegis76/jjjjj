import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, X, Trash2, Calendar } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import '../../styles/CartDrawer.css';

const CartDrawer = () => {
  const { cartItems, removeFromCart, cartTotal, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleProceed = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="cart-overlay">
      <div className="cart-backdrop" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={20} />
            <span>Your Reservations</span>
          </div>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your sanctuary is waiting. Add a room to start your journey.</p>
              <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>Explore Rooms</button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.variantId} className="cart-item">
                  <div className="item-img">
                    <img src={item.image} alt={item.variantName} referrerPolicy="no-referrer" />
                  </div>
                  <div className="item-info">
                    <span className="room-cat">{item.roomName}</span>
                    <h4 className="variant-name">{item.variantName}</h4>
                    <div className="item-meta">
                      <Calendar size={12} />
                      <span>Standard Stay × {item.quantity}</span>
                    </div>
                    <div className="item-price">{item.price}</div>
                  </div>
                  <button className="remove-item" onClick={() => removeFromCart(item.variantId)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Estimated Total</span>
              <strong>₹{cartTotal.toLocaleString()}</strong>
            </div>
            <div className="cart-actions">
              <button className="btn btn-outline w-full" onClick={clearCart}>Clear All</button>
              <button className="btn btn-primary w-full" onClick={handleProceed}>Proceed to Booking</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
