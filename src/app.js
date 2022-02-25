import express, { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';

// Local
// import Database from "./database.js";
import Routes from './Routes/index.js';

import config from './config/config.js';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api/', Routes());

app.use((req, res, next) => {
  const error = new Error("API endpoint doesn't exist");
  error.status = 404;
  next(error);
});

// error handler middleware
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, _) => {
  res.status(error.status || 500).json({
    success: false,
    data: [],
    message: error.message || 'Internal Server Error',
  });
});

try {
  await mongoose
    .connect(config.db.uri)
    .then(() => console.log('Connected to DB'));
  app.listen(config.app.port, () => {
    console.log(`Server running on port ${config.app.port}`);
  });
} catch (error) {
  console.log(error);
}
