const db = require('./db')
const response = require('./res')

exports.index = (req, res) => {
  response.ok("Substance Measurement API works properly!", res)
}

exports.getScalesAll = (req, res) => {
  db.query(`SELECT * FROM scales`, (err, data) => {
    if (err){
      console.error(`Problem getting scales data: ${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.getExperimentsByOwner = (req, res) => {
  const owner = req.params.id
  db.query(`SELECT * FROM experiments WHERE experiments_owner = ${owner}`, (err, data) => {
    if (err){
      console.error(`Problem getting experiments data by owner: ${err.stack}`)
    }
    response.ok(data, res)
  })
}