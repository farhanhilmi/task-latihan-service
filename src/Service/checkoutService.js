import client from '../grpc/checkout.js';

const checkout = (orderId) => {
  return new Promise((resolve, reject) => {
    client.checkout({ orderId }, (error, response) => {
      if (error) reject(error);
      resolve(response);
    });
  });
};

export default checkout;
