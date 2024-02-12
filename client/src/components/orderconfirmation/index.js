import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation({ onLogout }) {
  const orderDetails = JSON.parse(localStorage.getItem("initialOrderState"));

  let navigate = useNavigate();

  const handleBackToOrder = () => {
    navigate('/orderform'); // Adjust the path as needed for your application
  };    

  return (
    <div>
      <h2>Order Confirmation</h2>
      <div>
        <p>Thank you for your order. Order successfully received.</p>
        
        <div>
          <p><strong>Name:</strong> <span id="Item 1">{orderDetails[0]}</span></p>
          <p><strong>Name:</strong> <span id="Item 2">{orderDetails[1]}</span></p>
          <p><strong>Name:</strong> <span id="Item 3">{orderDetails[2]}</span></p>
          <p><strong>Name:</strong> <span id="Item 4">{orderDetails[3]}</span></p>
          <p><strong>Name:</strong> <span id="Item 5">{orderDetails[4]}</span></p>
          <p><strong>Name:</strong> <span id="Item 6">{orderDetails[5]}</span></p>
          <p><strong>Name:</strong> <span id="Item 7">{orderDetails[6]}</span></p>
          <p><strong>Name:</strong> <span id="Item 8">{orderDetails[7]}</span></p>
          <p><strong>Name:</strong> <span id="Item 9">{orderDetails[8]}</span></p>
          <p><strong>Name:</strong> <span id="Item 10">{orderDetails[9]}</span></p>
        </div>
      </div>

      <button onClick={handleBackToOrder}>Back to Order Page</button>
    </div>
  );
}

export default OrderConfirmation;