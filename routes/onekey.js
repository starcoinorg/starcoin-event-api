const qs = require('qs');
const { query } = require('../db/onekey');

module.exports = (router) => {

  /**
   * @openapi
   * /onekey/add:
   *   post:
   *     description: Add a one key order
   *     parameters: 
   *       - in: body
   *         name: body
   *         required: true
   *         schema: 
   *          $ref: '#/definitions/AddOnekey'
   *     responses:
   *       200:
   *         description: Add a one key order.
   *         schema: 
   *          $ref: '#/definitions/OnekeyResp'
   */
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
      await query(sql, [
        tradeaddr,
        name,
        phone,
        area,
        street,
        zipcode,
        address,
      ]);
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

  /**
   * @openapi
   * /onekey/list:
   *   get:
   *     description: Get one key list
   *     parameters: [
   *        {
   *          name: 'current',
   *          in: 'query',
   *          required: true,
   *          type: number,
   *          default: 1
   *        },
   *        {
   *          name: 'pageSize',
   *          in: 'query',
   *          required: true,
   *          type: number,
   *          default: 20
   *        },
   *     ]
   *     responses:
   *       200:
   *         description: Returns a one key list.
   *         schema: 
   *          type: 'array'
   *          items: 
   *            $ref: '#/definitions/Onekey'
   */
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
};
