import client from '../grpc/product.js';

const getAllProduct = () => {
  return new Promise((resolve, reject) => {
    client.getAllProduct({}, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    });
  });
};

export default getAllProduct;
