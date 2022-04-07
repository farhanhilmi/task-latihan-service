/* eslint-disable import/extensions */
import express from 'express';

import userRouter from './userRoutes.js';
import ProductRouter from './productRoutes.js';
import orderRoutes from './orderRoutes.js';

import authenticateToken from '../middleware/auth.js';

const Routes = () => {
  const router = express.Router();
  router.use('/users', userRouter());
  router.use('/products', ProductRouter());
  router.use('/orders', authenticateToken, orderRoutes());
  return router;
};

export default Routes;
