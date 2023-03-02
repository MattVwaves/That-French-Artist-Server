const express = require('express');
const {
  createBasket,
  getAllBaskets,
  getBasketById,
  // addToBasket,
} = require('../controllers/Basket');

const router = express.Router();

router.post('/', createBasket);
router.get('/', getAllBaskets);
router.get('/:id', getBasketById);
// router.patch('/:id', addToBasket);

module.exports = router;
