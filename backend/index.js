const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');


const connection = mysql.createConnection();

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

connection.query("SELECT * FROM `books` WHERE `author` = '鈺霖'", function (error, results, fields) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(results[0].name);
  connection.destroy()
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/list', (req, res) => {
//   res.json({
//     name: 'hjjkkkkjjj'
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })