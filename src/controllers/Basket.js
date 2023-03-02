const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();
const { getShopItemById } = require('./Item');

const createBasket = async (req, res) => {
  console.log(10);
  const basket = await prisma.basket.create({
    data: {},
    include: {
      shopItems: true,
    },
  });
  res.status(201).json({ basket });
};

const getAllBaskets = async (req, res) => {
  const baskets = await prisma.basket.findMany({
    include: {
      shopItems: true,
    },
  });
  res.status(200).json({ baskets });
};

const getBasketById = async (req, res) => {
  const { id } = req.params;
  const basket = await prisma.basket.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      shopItems: true,
    },
  });
  res.status(200).json({ basket });
};

const addToBasket = async (req, res) => {
  const { id } = req.params;
  const { description, category, price } = req.body;

  const basketItem = await prisma.basketItem.create({
    data: {
      description,
      category,
      price,
    },
  });

  const updatedBasket = await prisma.basket.update({
    where: {
      id: Number(id),
    },
    data: {
      basketItems: {
        connect: {
          id: basketItem.id,
        },
      },
    },
    include: {
      basketItems: true,
    },
  });
  res.status(201).json({ updatedBasket });
};

module.exports = {
  createBasket,
  getAllBaskets,
  getBasketById,
  addToBasket,
};
