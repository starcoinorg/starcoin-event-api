var mysql = require('mysql');

const mysqlOptions = {
  host: 'localhost',
  user: 'root',
  password: 'abc123',
  database: 'onekey',
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
    console.log('qsql: ', qsql)
  });
};

module.exports = { query };
