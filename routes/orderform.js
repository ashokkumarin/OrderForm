const { Router } = require('express');
const router = Router();


const { submitOrder } = require("../controllers/orderform");

router.post('/submitOrder', submitOrder);

module.exports = router;