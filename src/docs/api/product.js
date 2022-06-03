export default {
  '/products': {
    get: {
      tags: ['Product'],
      description: 'List all of the products',
      operationId: 'getProducts',
      consumes: ['application/json'],
      parameters: [],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/schemas/Products',
              },
            },
          },
        },
        500: {
          description: 'Server Error',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/schemas/Error',
              },
            },
          },
        },
      },
    },
  },
};
