import { useState } from 'react';

function Test({ cartItems }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.address && formData.cardNumber) {
      setOrderPlaced(true);
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      {orderPlaced ? (
        <div className="confirmation-message">
          <h2>Thank you for your order!</h2>
          <p>We've received your payment of ${total.toFixed(2)}.</p>
          <button onClick={() => setOrderPlaced(false)}>Place New Order</button>
        </div>
      ) : (
        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                pattern="\d{16}"
                title="16-digit card number"
                required
              />
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="total">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Test;