import express from 'express';

import createOrder from '../Handler/orderHandler.js';

const orderRoutes = () => {
  const router = express.Router();
  router.post('/', createOrder);
  return router;
};

export default orderRoutes;
