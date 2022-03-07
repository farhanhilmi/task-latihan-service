import mongoose from 'mongoose';
import config from './config/config.js';

import app from './app.js';
import logger from './Utils/logger.js';

try {
  await mongoose
    .connect(config.db.uri)
    .then(() => logger.info('Connected to DB'));
  app.listen(config.app.port, () => {
    logger.info(`Server running on port ${config.app.port}`);
  });
} catch (error) {
  logger.error(error);
}
