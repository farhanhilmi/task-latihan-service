/* eslint-disable import/extensions */
import express from 'express';

import userRouter from './userRoutes.js';
import ProductRouter from './productRoutes.js';
import orderRoutes from './orderRoutes.js';
import checkoutRoutes from './checkoutRoutes.js';

import authenticateToken from '../middleware/auth.js';

const Routes = () => {
  const router = express.Router();
  router.use('/users', userRouter());
  router.use('/products', ProductRouter());
  router.use('/orders', authenticateToken, orderRoutes());
  router.use('/checkout', authenticateToken, checkoutRoutes());
  return router;
};

export default Routes;
