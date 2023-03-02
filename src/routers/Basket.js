const express = require('express');
const {
  createBasket,
  getAllBaskets,
  getBasketById,
} = require('../controllers/Basket');

const router = express.Router();

router.post('/', createBasket);
router.get('/', getAllBaskets);
router.get('/:id', getBasketById);

module.exports = router;
