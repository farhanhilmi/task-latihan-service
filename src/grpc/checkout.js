import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import config from '../config/config.js';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PROTO_PATH = 'checkout.proto';

const packageDef = protoLoader.loadSync(PROTO_PATH, options);
const checkoutPackage = grpc.loadPackageDefinition(packageDef);

const client = new checkoutPackage.CheckoutService(
  config.grpc.port.checkout,
  grpc.credentials.createInsecure(),
);

export default client;
