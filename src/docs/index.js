import info from './info.js';
import server from './server.js';
import tags from './tags.js';
import definitions from './api/definitions.js';
import users from './api/user.js';
import product from './api/product.js';
import order from './api/order.js';
import checkout from './api/checkout.js';

export default {
  ...info,
  ...server,
  ...tags,
  ...definitions,
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  paths: { ...users, ...product, ...order, ...checkout },
};
