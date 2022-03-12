const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'substance_measurement'
})

connection.connect((err) => {
  if (err){
    console.error(`Database connection error: ${err.stack}`)
    return
  }

  console.log(`Database connected as : ${connection.threadId}`)
})

module.exports = connection