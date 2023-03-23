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
  updateBasketItem,
  deleteShopItem,
} = require('../controllers/Item');

const router = express.Router();

router.post('/display', createDisplayItem);
router.get('/display', getDisplayItemsBySubCategory);
router.delete('/display/:id', deleteDisplayItem);
router.post('/shop', createShopItem);
router.delete('/shop/:id', deleteShopItem);
router.get('/shop', getShopItemsByCategory);
router.get('/shop/:id', getShopItemById);
router.delete('/basket/:id', deleteBasketItem);
router.post('/basket/:id', createBasketItem);
router.patch('/basket/:id', updateBasketItem);

module.exports = router;
