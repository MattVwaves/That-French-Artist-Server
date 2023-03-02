const express = require('express');
const {
  createDisplayItem,
  createShopItem,
  getShopItemsByCategory,
  getShopItemById,
} = require('../controllers/Item');

const router = express.Router();

router.post('/display', createDisplayItem);
router.post('/shop', createShopItem);
router.get('/shop', getShopItemsByCategory);
router.get('/shop/:id', getShopItemById);

module.exports = router;
