var Koa = require('koa');
var Router = require('koa-router');
var { query } = require('./db');

var app = new Koa();
var router = new Router();
app.use(async (ctx, next) => {
  ctx.response.status = 200;
  await next();
});

router.get('/onekey/add', async (ctx, next) => {
  try {
    const sql = `INSERT INTO \`order\`
      (tradeaddr, name, phone, area, zipcode)
      VALUES
      ('84843', '钟泽方', '12535334', '桂林恭城', '100086')`;
    const ret = await query(sql);
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
  console.log(ret);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);
