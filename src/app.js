import express, { json, urlencoded } from 'express';
// import logger from 'morgan';
import { graphqlHTTP } from 'express-graphql';

// Local
// import Database from "./database.js";
import Routes from './Routes/index.js';

// Graphql
import graphqlSchema from './graphql/schema.js';
import graphqlResolver from './graphql/resolver.js';

const app = express();

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
