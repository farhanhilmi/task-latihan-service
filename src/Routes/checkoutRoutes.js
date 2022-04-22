import express from 'express';

import createCheckout from '../Handler/checkoutHandler.js';

const checkoutRoutes = () => {
  const router = express.Router();
  router.post('/', createCheckout);
  return router;
};

export default checkoutRoutes;
