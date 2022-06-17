import client from '../grpc/order.js';

const createNewOrder = (products, userId) => {
  return new Promise((resolve, reject) => {
    client.createOrder({ userId, products }, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    });
  });
};

export default createNewOrder;
