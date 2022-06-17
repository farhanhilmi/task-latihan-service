import express from 'express';

import handler from '../Handler/userHandler.js';

const userRoutes = () => {
  const router = express.Router();

  router.post('/', handler.postUser);

  router.get('/', handler.getUsers);

  router.delete('/', handler.deleteAllUser);
  router.get('/:userId', handler.getById);
  router.put('/:userId', handler.updateUser);
  router.delete('/:userId', handler.deleteUserById);
  router.post('/login', handler.login);

  return router;
};

export default userRoutes;
