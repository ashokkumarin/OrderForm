// Form.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Alert,
  Container,
  Typography,
  AppBar,
  Toolbar
} from "@mui/material";
import { SubmitOrders } from "../../api/orders";

function SubmitOrder() {
  let navigate = useNavigate();
  const foodItems = ["Samosa", "Pakoda" , "Bonda", "Murukku", "Thattai", "Vadai", "Upma", "Pesarattu", "Bajji", "Ribbon Pakoda" ];
  const initialOrderState = Array(10).fill(0);
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
      localStorage.setItem("orders", JSON.stringify(orders));
      navigate("/confirmorder");
    }
  };

  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
        <br /><br />
        </Grid>
        <form onSubmit={onSubmit}>
          {orders.map((order, index) => (
            <Grid container spacing={2} key={index} alignItems="center">
              <Grid item xs={1}></Grid>
              <Grid item xs={8}>
                <Typography variant="body1">{ foodItems[index + 1] }</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  value={order}
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value, 10))
                  }
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    inputProps: {
                      min: 0
                    },
                  }}
                />
              </Grid>
            </Grid>
          ))}

          <br />
          {hasError && (
            <Grid item>
              <Alert severity="error">
                Order quantity of Item#1 should be 1234. Please try again.
              </Alert>
            </Grid>
          )}

          <br /><br />
          <Grid container justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Order my Food
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default SubmitOrder;
