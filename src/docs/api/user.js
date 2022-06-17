export default {
  '/users': {
    get: {
      tags: ['User'],
      description: 'List all of the user',
      operationId: 'getUsers',
      consumes: ['application/json'],
      parameters: [],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/schemas/Users',
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
    post: {
      tags: ['User'],
      description: 'Create New User',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              required: ['username', 'password', 'name', 'address', 'gender'],
              $ref: '#/definitions/schemas/NewUser',
            },
          },
        },
      },

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
                    $ref: '#/definitions/schemas/message',
                  },
                  data: {
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
                message: '"name" is required',
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
  '/users/login': {
    post: {
      tags: ['User'],
      description: 'Login User',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['username', 'password'],
              properties: {
                username: {
                  type: 'string',
                  description: 'username for login',
                },
                password: {
                  type: 'string',
                  description: 'password for login',
                },
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: 'login success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    $ref: '#/definitions/schemas/success',
                  },
                  message: {
                    $ref: '#/definitions/schemas/message',
                  },
                  accessToken: {
                    type: 'string',
                    description: 'jwt token',
                    example: '',
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
                message: 'User Not Found',
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
