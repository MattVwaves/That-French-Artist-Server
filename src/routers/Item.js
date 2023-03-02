const express = require('express');
const {
  createDisplayItem,
  createShopItem,
  getShopItemsByCategory,
  getShopItemById,
  deleteBasketItem,
  createBasketItem,
} = require('../controllers/Item');

const router = express.Router();

router.post('/display', createDisplayItem);
router.post('/shop', createShopItem);
router.get('/shop', getShopItemsByCategory);
router.get('/shop/:id', getShopItemById);
router.delete('/basket', deleteBasketItem);
router.post('/basket/:id', createBasketItem);

module.exports = router;
