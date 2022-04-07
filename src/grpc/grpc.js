import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const grpcService = (protoPath) => {
  const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  };

  const packageDef = protoLoader.loadSync(protoPath, options);
  const servicePackage = grpc.loadPackageDefinition(packageDef);

  return servicePackage;
};

export default grpcService;
