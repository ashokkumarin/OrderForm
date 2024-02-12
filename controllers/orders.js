const { response } = require("express");

// Define the orderform controller
const Orders = async (req, res = response) => {
  const { orders } = req.body;
  // Convert the orders string to an array of numbers
  const ordersArray = req.body.orders;

  // Ideally search the user in a database,
  // throw an error if not found.
  if (ordersArray[0] !== 1234) {
    return res.status(400).json({
      msg: "message is not 1234",
    });
  }

  res.json({
    msg: "message is 1234",
  });
};

// Export the orderform controller
module.exports = {
  Orders,
};
