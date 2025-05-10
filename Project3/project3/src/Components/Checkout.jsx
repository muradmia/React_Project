import { useState } from 'react';

function Checkout() {
    const cartItems = [{
        id: 1,
        name: 'Product 1',
        price: 29.99,
        quantity: 2
    }]
    
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
    <div className="checkout-container bg-gray-50 p-4 container mx-auto items-center flex flex-col justify-center">
      <h1 className='text-blue-500 text-2xl'>Checkout</h1>
      
      {orderPlaced ? (
        <div className="confirmation-message max-w-300px p-4 bg-blue-300 text-white rounded-lg mt-5">
          <h2>Thank you for your order!</h2>
          <p>We've received your payment of ${total.toFixed(2)}.</p>
          <button className='bg-green-500 px-5 py-2 rounded-xl mt-5 hover:bg-green-600 cursor-pointer' onClick={() => setOrderPlaced(false)}>Place New Order</button>
        </div>
      ) : (
        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label className='text-gray-500 text-xl '>Full Name: </label>
              <input
              className='border-2 border-gray-300 p-1 rounded-md hover:border hover:border-blue-500 transition-border'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group pt-2">
              <label className='text-gray-500 text-xl hover:border'>Email:</label>
              <input
              className='border-2 border-gray-300 p-1 rounded-md hover:border ms-11 hover:border-blue-500 transition-border'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group pt-2">
              <label className='text-gray-500 text-xl hover:border'>Address:</label>
              <textarea
              className='border-2 ms-5 border-gray-300 p-1 rounded-md hover:border hover:border-blue-500 transition-border'
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className='text-gray-500 text-xl hover:border'>Card Number:</label>
              <input
              className='border-2 border-gray-300 p-1 rounded-md hover:border hover:border-blue-500 transition-border'
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                title="16-digit card number"
              />
            </div>

            <div className="order-summary mt-5 rounded-xl max-w-[500px] p-4 bg-blue-300 text-white">
              <h3>Order Summary</h3>
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <span>{item.name} x </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="total">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            <button className='bg-green-400 px-4 py-3 mt-2 rounded-lg text-white font-bold hover:bg-green-500 cursor-pointer' type="submit">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Checkout;