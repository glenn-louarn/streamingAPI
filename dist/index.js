"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// const movies = require('./movies.json')
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : '',
//   password : 'yolo',
//   database : 'users'
// });
// connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
// connection.end();
app_1.app.get('/catalogue', (req, res) => {
    res.send("Liste des films (avatar, titanic)");
});
const server = app_1.app.listen(5000, '0.0.0.0', () => {
    const { port, address } = server.address();
    console.log('Server listening on:', 'http://' + address + ':' + port);
});
//# sourceMappingURL=index.js.map