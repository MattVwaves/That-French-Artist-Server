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
  const { description, basketId } = req.body;
  console.log(req.body);

  const basketItem = await prisma.basketItem.findFirst({
    where: {
      description,
      basketId: Number(basketId),
    },
  });
  const deletedItem = await prisma.basketItem.delete({
    where: {
      id: basketItem.id,
    },
  });
  const updatedBasket = await prisma.basket.findFirst({
    where: {
      id: Number(basketId),
    },
    include: {
      basketItems: true,
    },
  });

  res.status(201).json({ updatedBasket });
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
  getShopItemById,
  deleteBasketItem,
  createBasketItem,
};
