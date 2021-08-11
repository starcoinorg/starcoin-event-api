const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const send = require('koa-send')
const path = require('path')

const routes = require('./routes')

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

app.use(async (ctx, next) => {
  const url = ctx.request.url
  if (url.startsWith('/swagger')) {
    ctx.response.status = 200;
    const filePath = path.resolve(__dirname, url)
    await send(ctx, filePath)
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  await next();
});

routes(router)

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);
