import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line operator-linebreak
const {
  MONGODB_URI,
  PORT,
  KAFKA_CLIENT_ID,
  KAFKA_BROKERS,
  SECRET_TOKEN,
  TOKEN_EXPIRES_IN,
  HOST,
  PRODUCT_GRPC_PORT,
  ORDER_GRPC_PORT,
  CHECKOUT_GRPC_PORT,
} = process.env;

const config = {
  app: {
    port: PORT,
  },
  db: {
    uri: MONGODB_URI,
  },
  kafka: {
    CLIENT_ID: KAFKA_CLIENT_ID,
    BROKERS: KAFKA_BROKERS,
  },
  grpc: {
    port: {
      product: `${HOST}:${PRODUCT_GRPC_PORT}`,
      order: `${HOST}:${ORDER_GRPC_PORT}`,
      checkout: `${HOST}:${CHECKOUT_GRPC_PORT}`,
    },
  },
  SECRET_TOKEN,
  tokenExpiresIn: TOKEN_EXPIRES_IN,
};

export default config;
