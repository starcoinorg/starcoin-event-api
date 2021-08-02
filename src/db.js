var mysql = require('mysql');

const mysqlOptions = {
  host: process.env.STARCOIN_EVENT_MYSQL_HOST || 'localhost',
  user: process.env.STARCOIN_EVENT_MYSQL_USER || 'root',
  password: process.env.STARCOIN_EVENT_MYSQL_PWD || 'abc123',
  database: process.env.STARCOIN_EVENT_MYSQL_DB || 'onekey',
};

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(mysqlOptions);
    connection.connect();
    const qsql = connection.query(sql, values, function (error, results, fields) {
      if (error) reject(error);
      resolve(results);
      connection.end();
    });
  });
};

module.exports = { query };
