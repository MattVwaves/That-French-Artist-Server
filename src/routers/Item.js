const express = require('express');
const {
  createDisplayItem,
  createShopItem,
  getShopItemsByCategory,
} = require('../controllers/Item');

const router = express.Router();

router.post('/display', createDisplayItem);
router.post('/shop', createShopItem);
router.get('/shop/:category', getShopItemsByCategory);

module.exports = router;
