const { response } = require("express");

// Define the orderform controller
const submitOrder = async (req, res = response) => {
    const { orders } = req.body;
    console.log("Orders: " + orders);

    // Convert the orders string to an array of numbers
    const ordersArray = orders.split(",").map(Number);

    // Ideally search the user in a database,
    // throw an error if not found.
    if (ordersArray[1] !== 1234) {
      return res.status(400).json({
        msg: "message is not 1234",
      });
    }

    res.json({
      msg: "message is 1234",
    });

    // Export the orderform controller
    module.exports = {
      submitOrder,
    };
    

    // Ideally search the user in a database,
    // throw an error if not found.
    if (orders[1] !== "1234") {
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
    submitOrder,
  };
