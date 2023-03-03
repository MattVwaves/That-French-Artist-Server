const express = require('express');
const {
  createDisplayItem,
  createShopItem,
  getShopItemsByCategory,
  getShopItemById,
  deleteBasketItem,
  createBasketItem,
  getDisplayItemsBySubCategory,
  deleteDisplayItem,
} = require('../controllers/Item');

const router = express.Router();

router.post('/display', createDisplayItem);
router.get('/display', getDisplayItemsBySubCategory);
router.delete('/display/:id', deleteDisplayItem);
router.post('/shop', createShopItem);
router.get('/shop', getShopItemsByCategory);
router.get('/shop/:id', getShopItemById);
router.delete('/basket', deleteBasketItem);
router.post('/basket/:id', createBasketItem);

module.exports = router;
