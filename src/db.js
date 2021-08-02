var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abc123',
  database: 'onekey',
});

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.connect();
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      resolve(results);
    });
    connection.end();
  });
};

module.exports = { query };
