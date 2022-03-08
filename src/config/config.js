import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line object-curly-newline
const { MONGODB_URI, PORT, KAFKA_CLIENT_ID, KAFKA_BROKERS } = process.env;

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
};

export default config;
