
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',
  user     : 'root',
  password : '122And517@',
  database : 'vueshop'
  // port:3306
}); 
 
module.exports = connection;
