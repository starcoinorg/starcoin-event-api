const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const routes = require('./routes')

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.response.status = 200;
  await next();
});

routes(router)

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);
