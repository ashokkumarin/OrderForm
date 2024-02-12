const { Router } = require('express');
const router = Router();


const { Orders } = require("../controllers/orders");

router.post('/orders', Orders);

module.exports = router;