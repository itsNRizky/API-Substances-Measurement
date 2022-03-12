const db = require('./db')
const express = require('express')
exports.getExperimentsByOwner = (req, res) => {
  let experiments = []
  const owner = req.params.id
  db.query(`SELECT * FROM experiments WHERE experiments_owner = ${owner}`, (err, data) => {
    if (err){
      console.error(`Problem getting experiments data by owner: ${err.stack}`)
    }
    experiments = data
  })

  res.send()
}