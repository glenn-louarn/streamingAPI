import {app} from './app'
import {AddressInfo} from 'net'
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

app.get('/catalogue', (req,res) => {
    res.send("Liste des films (avatar, titanic)")
})

const server = app.listen(5000, '0.0.0.0', () => {
    const {port, address} = server.address() as AddressInfo;
    console.log('Server listening on:','http://' + address + ':'+port);
});


