const onekey = require('./onekey');
const poll = require('./poll');

const routes = [onekey, poll];

module.exports = (router) => {
  routes.forEach((r) => r(router));
};
