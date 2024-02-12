import React from "react";
import { Container, Typography, Box } from "@mui/material";

function ConfirmOrder() {
  return (
    <Container>
      <br /><br />
      <Typography variant="h4" gutterBottom>
        Order Confirmed!
      </Typography>
      <Box>
        <Typography variant="body1">
          Thank you for your order. Order successfully received.
        </Typography>
      </Box>
    </Container>
  );
}

export default ConfirmOrder;
