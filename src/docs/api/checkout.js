export default {
  '/checkout': {
    post: {
      tags: ['Checkout'],
      description: 'Checkout items that have been ordered',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              required: ['orderId'],
              $ref: '#/definitions/schemas/Checkout',
            },
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        201: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    $ref: '#/definitions/schemas/success',
                  },
                  message: {
                    type: 'string',
                    example: 'success',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/schemas/Error',
              },
              example: {
                success: false,
                message: '"orderId" is required',
                data: [],
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
