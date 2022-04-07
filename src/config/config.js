import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line operator-linebreak
const { MONGODB_URI, PORT, KAFKA_CLIENT_ID, KAFKA_BROKERS, SECRET_TOKEN } =
  process.env;

const config = {
  app: {
    port: PORT || 8000,
  },
  db: {
    uri: MONGODB_URI,
  },
  kafka: {
    CLIENT_ID: KAFKA_CLIENT_ID,
    BROKERS: KAFKA_BROKERS,
  },
  SECRET_TOKEN,
};

export default config;
