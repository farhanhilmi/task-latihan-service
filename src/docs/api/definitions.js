export default {
  definitions: {
    schemas: {
      success: {
        type: 'boolean',
        example: true,
      },
      message: {
        type: 'string',
        example: 'success',
      },
      User: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'User identification number',
            example: '6226f49ce594819e12f2b4c6',
          },
          name: {
            type: 'string',
            example: 'modric',
          },
          username: {
            type: 'string',
            example: 'modric',
          },
          password: {
            type: 'string',
            example:
              'GbhSUFgGc/3JNmVAEkv8dw==:PRIL2KJWwx41cyM60oRerrFUao5SJ6phAoxdKpqlfQl5Fc9OO5OpKxzXayhFNzoLWHKdXoFQQpT318L2qrg7oA==',
          },
          gender: {
            type: 'string',
            example: 'male',
          },
          address: {
            type: 'string',
            example: 'Madrid',
          },
          createdDate: {
            type: 'string',
            example: '2022-03-08T06:15:56.176Z',
          },
          modifyDate: {
            type: 'string',
            example: '2022-03-08T06:15:56.176Z',
          },
        },
      },
      Product: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Product identification number',
            example: '6226f49ce594819e12f2b4c6',
          },
          name: {
            type: 'string',
            example: 'microphone',
          },
          quantity: {
            type: 'number',
            example: 20,
          },
          price: {
            type: 'number',
            example: 200000,
          },
          description: {
            type: 'string',
            example: 'nulla xajad dolore aliqua qui',
          },
        },
      },
      NewUser: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'modric',
          },
          username: {
            type: 'string',
            example: 'modric',
          },
          password: {
            type: 'string',
            example: '12345',
          },
          gender: {
            type: 'string',
            example: 'male',
          },
          address: {
            type: 'string',
            example: 'Madrid',
          },
        },
      },
      Users: {
        type: 'object',
        properties: {
          success: {
            $ref: '#/definitions/schemas/success',
          },
          message: {
            $ref: '#/definitions/schemas/message',
          },
          data: {
            type: 'array',
            items: {
              $ref: '#/definitions/schemas/User',
            },
          },
        },
      },
      Products: {
        type: 'object',
        properties: {
          success: {
            $ref: '#/definitions/schemas/success',
          },
          message: {
            $ref: '#/definitions/schemas/message',
          },
          data: {
            type: 'object',
            properties: {
              products: {
                type: 'array',
                items: {
                  $ref: '#/definitions/schemas/Product',
                },
              },
            },
          },
        },
      },
      OrderProduct: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '6244321d37826bd7e91c00da',
          },
          orderedQty: {
            type: 'number',
            example: 4,
          },
        },
      },
      NewOrder: {
        type: 'object',
        properties: {
          products: {
            type: 'array',
            items: {
              $ref: '#/definitions/schemas/OrderProduct',
            },
          },
        },
      },
      Checkout: {
        type: 'object',
        properties: {
          orderId: {
            type: 'string',
            example: '625e3f86d507680a1c6e46ed',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: false,
          },
          message: {
            type: 'string',
            example: 'Internal Server Error',
          },
          data: {
            type: 'array',
            example: [],
          },
        },
      },
      UnauthorizedError: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: false,
          },
          message: {
            type: 'string',
            example: 'Token is required for authentication',
          },
        },
      },
    },
  },
};
