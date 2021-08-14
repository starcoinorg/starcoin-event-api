const onekey = require('./onekey');

const routes = [onekey];

module.exports = (router) => {
  routes.forEach((r) => r(router));
};
