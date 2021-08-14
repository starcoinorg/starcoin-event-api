const swaggerJsdoc = require('swagger-jsdoc');
const onekey = require('./onekey');

const options = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: 'Onekey',
      version: '1.0.0',
    },
    host: 'localhost:3333',
    schemes: ['http', 'https'],
    definitions: {
      ...onekey,
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpecification = swaggerJsdoc(options);

module.exports = swaggerSpecification;
