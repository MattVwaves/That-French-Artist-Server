const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const saltRounds = 10;

const secret = process.env.JWT_SECRET;

const createDisplayItem = async (req, res) => {
  const { description, url, category, subCategory } = req.body;
  try {
    const displayItem = await prisma.displayItem.create({
      data: {
        description,
        category,
        subCategory,
      },
    });
    return res.status(201).json({ displayItem });
  } catch (error) {
    return res.status(500).json({ error: 'server error' });
  }
};

const createShopItem = async (req, res) => {
  const { description, category, price, quantity } = req.body;
  try {
    const shopItem = await prisma.shopItem.create({
      data: { description, category, price, quantity },
    });
    return res.status(201).json({ shopItem });
  } catch (e) {
    return res.status(500).json({ error: 'server error' });
  }
};

const getShopItemsByCategory = async (req, res) => {
  const { category } = query.params;
  try {
    const itemsList = await prisma.shopItem.findMany({
      where: {
        category,
      },
    });
    return res.status(200).json({ itemsList });
  } catch (e) {
    return res.status(500).json({ error: 'server error' });
  }
};

const getShopItemById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const shopItem = await prisma.shopItem.findFirst({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json({ shopItem });
};

module.exports = {
  createDisplayItem,
  createShopItem,
  getShopItemsByCategory,
  getShopItemById,
};