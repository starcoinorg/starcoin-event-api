const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: 'Onekey',
      version: '1.0.0',
    },
    host: 'localhost:3333',
    schemes: ['http'],
    definitions: {
      Onekey: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          address: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          area: {
            type: 'string',
          },
          zipcode: {
            type: 'string',
          },
          street: {
            type: 'string',
          },
          street2: {
            type: 'string',
          },
        },
      },
      AddOnekey: {
        type: 'object',
        properties: {
          address: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          area: {
            type: 'string',
          },
          zipcode: {
            type: 'string',
          },
          street: {
            type: 'string',
          },
          street2: {
            type: 'string',
          },
        },
      },
      Resp: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
  apis: ['./routes/index.js'],
};

const swaggerSpecification = swaggerJsdoc(options);

module.exports = swaggerSpecification;
