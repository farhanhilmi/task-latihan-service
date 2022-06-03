/* eslint-disable no-restricted-syntax */
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MongoMemoryServer } from 'mongodb-memory-server';

mongoose.promise = global.Promise;

let mongoServer;

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = async () => {
  await mongoose.disconnect();

  mongoServer = await MongoMemoryServer.create();

  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, opts, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const close = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

const clear = async () => {
  const { collections } = mongoose.connection;

  // eslint-disable-next-line guard-for-in
  for (const key in collections) {
    const collection = collections[key];
    // eslint-disable-next-line no-await-in-loop
    await collection.deleteMany({});
  }
};

export default {
  connect,
  close,
  clear,
};
