const express = require('express');
const { createDisplayItem, createShopItem } = require('../controllers/Item');

const router = express.Router();

router.post('/display', createDisplayItem);
router.post('/shop', createShopItem);
// router.get('/display', getAllDisplayItems)

module.exports = router;
