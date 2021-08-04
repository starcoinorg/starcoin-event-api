const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const qs = require('qs');
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
  const params = qs.parse(ctx.request.querystring);
  const list = await query('select * from `order` LIMIT ?, ?', [
    Number(params.pageSize) * (params.current - 1),
    Number(params.pageSize),
  ]);
  const total = await query('select count(id) from `order`');
  ctx.body = {
    list,
    total,
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);
