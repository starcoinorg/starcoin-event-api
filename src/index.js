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
    const selectSql = `SELECT COUNT(*) AS solution from \`orders\``;
    const resp = await query(selectSql);
    const orderCount = resp[0].solution;

    if (orderCount >= 200) {
      ctx.body = {
        success: false,
        message: '已售罄',
      };
      return;
    }

    const requestBody = ctx.request.body;
    const { tradeaddr, name, phone, area, street, zipcode, address } =
      requestBody;
    const sql = `INSERT INTO \`orders\`
      (tradeaddr, name, phone, area, street, zipcode, address)
      VALUES
      (?, ?, ?, ?, ?, ?, ?)`;
    await query(sql, [tradeaddr, name, phone, area, street, zipcode, address]);
    ctx.body = {
      success: true,
    };
  } catch (e) {
    ctx.body = {
      success: false,
      message: '不能重复提交相同的账号地址',
    };
  }
});

router.get('/onekey/list', async (ctx, next) => {
  const params = qs.parse(ctx.request.querystring);
  const list = await query('select * from `orders` LIMIT ?, ?', [
    Number(params.pageSize) * (Number(params.current) - 1),
    Number(params.pageSize),
  ]);
  const total = await query('select count(id) from `orders`');
  ctx.body = {
    list,
    total,
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);
