export default {
  '/orders': {
    post: {
      tags: ['Order'],
      description: 'Create New Order',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              required: ['userId', 'products'],
              $ref: '#/definitions/schemas/NewOrder',
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
                    example: 'order created successfully',
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
                message: '"userId" is required',
                data: [],
              },
            },
          },
        },
        403: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/schemas/UnauthorizedError',
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
