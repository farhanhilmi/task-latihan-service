import express, { json, urlencoded } from 'express';

// swagger
import swaggerUI from 'swagger-ui-express';

import { graphqlHTTP } from 'express-graphql';

// import logger from 'morgan';

// Local
import Routes from './Routes/index.js';

// Graphql
import graphqlSchema from './graphql/schema.js';
import graphqlResolver from './graphql/resolver.js';
// import config from './config/config.js';

import swaggerDocument from './docs/index.js';

const app = express();

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api/', Routes());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  }),
);

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

export default app;
