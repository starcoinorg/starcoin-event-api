const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const { query } = require('./db');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.response.status = 200;
  await next();
});

router.post('/onekey/add', async (ctx, next) => {
  try {
    const requestBody = ctx.request.body;
    const { tradeaddr, name, phone, area, zipcode } = requestBody;
    const sql = `INSERT INTO \`order\`
      (tradeaddr, name, phone, area, zipcode)
      VALUES
      (?, ?, ?, ?, ?)`;
    const ret = await query(sql, [tradeaddr, name, phone, area, zipcode]);
    ctx.body = {
      success: true,
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = 'Not Found';
  }
});

router.get('/onekey/list', async (ctx, next) => {
  const ret = await query('select * from `order`');
  ctx.body = ret;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);
