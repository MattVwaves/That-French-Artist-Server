const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
  const { basketId } = req.params;
  const basket = getBasketById(basketId);
};

module.exports = {
  createBasket,
  getAllBaskets,
  getBasketById,
};
