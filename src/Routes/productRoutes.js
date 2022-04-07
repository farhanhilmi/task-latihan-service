import express from 'express';

import handlerAllProduct from '../Handler/productHandler.js';

const productRoutes = () => {
  const router = express.Router();
  router.get('/', handlerAllProduct);
  return router;
};

export default productRoutes;
