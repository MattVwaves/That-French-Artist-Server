// require('dotenv').config;
const env = require('dotenv').config({ path: './.env' });

const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

const app = express();
app.disable('x-powered-by');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const itemRouter = require('./routers/Item');
app.use('/item', itemRouter);

const basketRouter = require('./routers/Basket');
app.use('/basket', basketRouter);

const stripeRouter = require('./routers/Stripe');
app.use('/checkout', stripeRouter);

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'eur',
      amount: 1999,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log(paymentIntent);
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:4242/success',
//     cancel_url: 'http://localhost:4242/cancel',
//   });

//   res.redirect(303, session.url);
// });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});
