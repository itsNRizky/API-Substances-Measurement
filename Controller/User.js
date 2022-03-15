const db = require('../db')
const response = require('../res')

exports.getUserAll = (req, res) => {
  db.query(`SELECT * FROM users`, (err, data) => {
    if (err){
      console.error(`||Error getting all users data||\n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.getUserByID = (req, res) => {
  const id = req.params.id
  db.query(`SELECT * FROM users WHERE users.users_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error getting user ID: ${id}||\n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.insertUser = (req, res) => {
  const name = req.body.name
  db.query(`INSERT INTO users (users_id, users_name) VALUE ('', '${name}')`, (err, data) => {
    if (err){
      console.error(`||Error inserting new users name: ${name}||\n${err.stack}`)
    }

    response.ok(`New user: ${name} inserted properly!`, res)
  })
}

exports.updateUserByID = (req, res) => {
  const name = req.body.name
  const id = req.body.id
  db.query(`UPDATE users SET users_name = '${name}' WHERE users.users_id = '${id}'`, (err, data) => {
    if (err){
      console.error(`||Error updating user ID: ${id}||\n${err.stack}`)
    }

    response.ok(`Updating user ID: ${id} success!`, res)
  })
}

exports.deleteUserByID = (req, res) => {
  const id = req.params.id
  db.query(`DELETE FROM users WHERE users.users_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error deleting user ID: ${id}||\n${err.stack}`)
    }

    response.ok(`Users data deleted properly!`, res)
  })
}