import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmOrder({ onLogout }) {
  //const orderDetails = JSON.parse(localStorage.getItem("orders"));

  //console.log(orderDetails);

  let navigate = useNavigate();

  const handleBackToOrder = () => {
    navigate('/orders'); // Adjust the path as needed for your application
  };    

  return (
    <div>
      <h2>Order Confirmed!</h2>
      <div>
        <p>Thank you for your order. Order successfully received.</p>
        

      </div>

      <button onClick={handleBackToOrder}>Back to Order Page</button>
    </div>
  );
}

export default ConfirmOrder;