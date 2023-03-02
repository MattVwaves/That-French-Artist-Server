const express = require('express');
const {
  createDisplayItem,
  createShopItem,
  getShopItemsByCategory,
  getShopItemById,
  deleteBasketItem,
} = require('../controllers/Item');

const router = express.Router();

router.post('/display', createDisplayItem);
router.post('/shop', createShopItem);
router.get('/shop', getShopItemsByCategory);
router.get('/shop/:id', getShopItemById);
router.delete('/basket', deleteBasketItem);

module.exports = router;
