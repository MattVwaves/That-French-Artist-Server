const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

const createCheckout = async (req, res) => {
  const { newBasket } = req.body;
  console.log(newBasket);

  const line_items = newBasket.map((item) => {
    return {
      price_data: {
        currency: 'gbp',
        product_data: {
          name: item.description,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:3001/success',
    cancel_url: 'http://localhost:3001/cancel',
  });

  res.send(JSON.stringify({ url: session.url }));
};

module.exports = { createCheckout };
