module.exports = {
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
  OnekeyResp: {
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
};
