const db = require('../db')
const response = require('../res')

exports.getScalesAll = (req, res) => {
  db.query(`SELECT * FROM scales;`, (err, data) => {
    if (err){
      console.error(`||Error getting all scales data||\n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.getScaleByID = (req, res) => {
  const id = req.params.id
  db.query(`SELECT * FROM scales WHERE scales_id = '${id}'`, (err, data) => {
    if (err){
      console.error(`||Error getting scale by ID|| \n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.insertScale = (req, res) => {
  const device = req.body.device
  const name = req.body.name
  db.query(`INSERT INTO scales (scales_id, scales_device, scales_name, scales_state) VALUES ('', '${device}', '${name}', 'off')`, (err) => {
    if (err){
      console.error(`||Error inserting scale: ${name}|| \n${err.stack}`)
    }

    response.ok(`Scale: ${name} inserted properly!`, res)
  })
}

exports.deleteScaleByID = (req, res) => {
  const id = req.params.id
  db.query(`DELETE FROM scales WHERE scales.scales_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error deleting scale by ID: ${id}|| \n${err.stack}`)
    }

    response.ok(`Success deleting the scale!`, res)
  })
}

exports.updateScaleByID = (req, res) => {
  const id = req.body.id //use hidden form in frontend
  const device = req.body.device
  const name = req.body.name
  db.query(`UPDATE scales SET scales_device = '${device}', scales_name = '${name}' WHERE scales.scales_id = ${id} `, (err, data) => {
    if (err){
      console.error(`||Error updating data scale: ${id}|| \n${err.stack}`)
    }

    response.ok(`Scale ID: ${id} updated properly!`, res)
  })
}

exports.setScaleStateOnByID = (req, res) => {
  const id = req.params.id
  db.query(`UPDATE scales SET scales_state = 'on' WHERE scales.scales_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error setting scale: ${id} state to ON|| \n${err.stack}`)
    }

    response.ok(`Success setting scale_id: ${id}'s state to ON`, res)
  })
}

exports.setScaleStateOffByID = (req, res) => {
  const id = req.params.id
  db.query(`UPDATE scales SET scales_state = 'off' WHERE scales.scales_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error setting scale: ${id} state to OFF|| \n${err.stack}`)
    }

    response.ok(`Success setting scale_id: ${id}'s state to OFF`, res)
  })
}