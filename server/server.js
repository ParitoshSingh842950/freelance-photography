import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Stripe from 'stripe';

import adminRoutes from './routes/adminRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import connectDB from './db.js';
import Order from './models/Order.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());

// User authentication and authorization middleware
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden.' });
  next();
};

// Stripe payment intent route
app.post('/create-payment-intent', async (req, res) => {
  const { paymentMethod, cart, shippingAddress, customerName } = req.body;

  const amount = cart.reduce((total, item) => total + item.price, 0);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd',
      payment_method: paymentMethod,
      confirm: true,
    });

    await Order.create({
      customerName,
      shippingAddress,
      items: cart,
      totalAmount: amount,
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Use routes
app.use('/api/admin', adminRoutes);
app.use('/api/orders', authenticateJWT, authorizeAdmin, orderRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/images', authenticateJWT, authorizeAdmin, imageRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
