var mysql = require('mysql');

const mysqlOptions = {
  host: process.env.STARCOIN_EVENT_MYSQL_HOST || 'localhost',
  user: process.env.STARCOIN_EVENT_MYSQL_USER || 'root',
  password: process.env.STARCOIN_EVENT_MYSQL_PWD || 'abc123',
  database: process.env.STARCOIN_EVENT_MYSQL_DB || 'onekey',
};
const pool = mysql.createPool(mysqlOptions);

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, function (error, results, fields) {
      if (error) reject(error);
      resolve(results);
    });
  });
};

module.exports = { query };
