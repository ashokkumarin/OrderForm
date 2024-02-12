// Form.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { SubmitOrders } from "../../api/orders";

function SubmitOrder({ onLogout }) {
  let navigate = useNavigate();

  const initialOrderState = Array(10).fill(0); // Initialize order quantities for 10 items as 0
  const [orders, setOrders] = useState(initialOrderState);
  const [hasError, setHasError] = useState(false);

  const handleQuantityChange = (index, quantity) => {
    const updatedOrders = [...orders];
    updatedOrders[index] = quantity;
    setOrders(updatedOrders);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const orderResults = await SubmitOrders({ orders });

    if (!orderResults) setHasError(true);
    else {
      localStorage.setItem("orders", orders);
      navigate("/confirmorder");
    }
  };

  return (
    <div className="container">
      <div className="mt-2 mb-2 justify-content-end" noGutters>
        <Button variant="outline-danger" onClick={onLogout}>
          Log out
        </Button>
      </div>
      <form onSubmit={onSubmit}>
        {orders.map((order, index) => (
          <div key={index}>
            <label>Item {index + 1}: </label>
            <input
              type="number"
              value={order}
              onChange={(e) =>
                handleQuantityChange(index, parseInt(e.target.value))
              }
              min="0"
            />
          </div>
        ))}
        {hasError && (
          <p>
            <Alert variant={"danger"}>
              Order quantity of Item#1 should be 1234. Please try again.
            </Alert>
          </p>
        )}

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default SubmitOrder;
