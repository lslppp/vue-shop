
// var mysql  = require('mysql');  
 
// var connection = mysql.createConnection({     
//   host     : 'localhost',
//   user     : 'root',
//   password : '122And517@',
//   database : 'vueshop'
//   // port:3306
// }); 
 
// module.exports = connection;



var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',
  user     : 'root',
  password : '122And517@',
  database : 'vueshop',
  port:3306
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM goods_list';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
// connection.end();
module.exports = connection;
