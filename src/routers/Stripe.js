const express = require('express');
const { createCheckout } = require('../controllers/Stripe');

const router = express.Router();

router.post('/', createCheckout);

module.exports = router;
