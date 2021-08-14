const qs = require('qs');
const cs = require('change-case');
const moment = require('moment');
const { query } = require('../db/poll');

module.exports = (router) => {
  router.post('/poll/add', async (ctx) => {
    const requestBody = ctx.request.body;
    const {
      title_en,
      title,
      description_en,
      description,
      creator,
      network,
      status,
      link,
      type_args_1,
      id_on_chain,
      duration,
    } = requestBody;

    const create_at = moment().valueOf();
    const end_time = moment(create_at).add(duration, 'days').valueOf();

    const sql = `INSERT INTO \`poll_item\`
      (title_en, title, description_en, description, creator, network, status, link, type_args_1, id_on_chain, create_at, end_time)
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    try {
      await query(sql, [
        title_en,
        title,
        description_en,
        description,
        creator,
        network,
        status,
        link,
        type_args_1,
        id_on_chain,
        create_at,
        end_time,
      ]);
      ctx.body = {
        code: 'SUCCESS',
        message: 'SUCCESS',
      };
    } catch (e) {
      console.log(e);
      ctx.body = {
        code: 'FAIL',
        message: 'FAIL',
      };
    }
  });

  router.get('/poll/list', async (ctx) => {
    const params = qs.parse(ctx.request.querystring);
    const list = await query('SELECT * FROM `poll_item` WHERE network=? LIMIT ?, ?', [
      params.network,
      Number(params.count) * (Number(params.page) - 1),
      Number(params.count),
    ]);
    const count = await query('SELECT count(id) FROM `poll_item`');
    const total = count[0]['count(id)'];

    const camelList = list.map((li) => {
      const cmLi = {};
      Object.keys(li).forEach((key) => {
        cmLi[cs.camelCase(key).replace('_', '')] = li[key];
      });
      return cmLi;
    });

    ctx.body = {
      code: 'SUCCESS',
      message: 'SUCCESS',
      data: {
        list: camelList,
        totalElements: total,
        currentPage: params.page - 1,
        totalPage: total ? Math.ceil(total / params.count) : 0,
      },
    };
  });

  router.get('/poll/get', async (ctx) => {
    const params = qs.parse(ctx.request.querystring);
    const detail = await query('SELECT * FROM `poll_item` WHERE network=? AND id=?', [
      params.network,
      params.id,
    ]);

    const cmDetail = {}
    Object.keys(detail[0]).forEach(key => {
      cmDetail[cs.camelCase(key)] = detail[0][key]
    })

    cmDetail['typeArgs1'] = cmDetail['typeArgs_1']

    delete cmDetail['typeArgs_1']

    ctx.body = cmDetail;
  });
};
