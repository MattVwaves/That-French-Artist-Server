const prisma = require('./Client');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const secret = process.env.JWT_SECRET;

const createDisplayItem = async (req, res) => {
  const { description, category, subCategory } = req.body;
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

const deleteDisplayItem = async (req, res) => {
  const { id } = req.params;
  const displayItem = await prisma.displayItem.delete({
    where: {
      id: Number(id),
    },
  });
  res.status(201).json({ displayItem });
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

const deleteShopItem = async (req, res) => {
  const { id } = req.params;
  const shopItem = await prisma.shopItem.delete({
    where: {
      id: Number(id),
    },
  });
  res.status(201).json({ shopItem });
};

const getShopItemsByCategory = async (req, res) => {
  const { category } = req.query;
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

const getDisplayItemsBySubCategory = async (req, res) => {
  const { subcategory } = req.query;
  const itemsList = await prisma.displayItem.findMany({
    where: {
      subCategory: subcategory,
    },
  });
  return res.status(200).json({ itemsList });
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

const deleteBasketItem = async (req, res) => {
  const { id } = req.params;

  const basketItem = await prisma.basketItem.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(201).json({ basketItem });
};

const updateBasketItem = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const updatedBasketItem = await prisma.basketItem.update({
    where: {
      id: Number(id),
    },
    data: {
      quantity: quantity,
    },
  });

  res.status(201).json({ updatedBasketItem });
};

const createBasketItem = async (req, res) => {
  const { description, category, price } = req.body;
  const { id } = req.params;
  const basketItem = await prisma.basketItem.create({
    data: {
      description,
      category,
      price,
      basketId: Number(id),
    },
  });
  res.status(201).json({ basketItem });
};

module.exports = {
  createDisplayItem,
  createShopItem,
  getShopItemsByCategory,
  getDisplayItemsBySubCategory,
  getShopItemById,
  deleteBasketItem,
  createBasketItem,
  deleteDisplayItem,
  updateBasketItem,
  deleteShopItem,
};
