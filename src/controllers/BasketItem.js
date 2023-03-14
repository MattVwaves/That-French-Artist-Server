const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createBasketItem = async (req, res) => {
  const { description, category, price, quantity } = req.body;
  const basketItem = await prisma.basketItem.create({
    data: {
      description,
      category,
      price,
      quantity,
    },
  });
  res.status(201).json({ basketItem });
};

module.exports = {
  createBasketItem,
};
