/* eslint-disable import/extensions */
import express from 'express';

import userRouter from './userRoutes.js';

const Routes = () => {
  const router = express.Router();
  router.use('/users', userRouter());
  return router;
};

export default Routes;
