const db = require('../db')
const response = require('../res')

exports.getRecordsByExperimentsID = (req, res) => {
  const expreiments_id = req.params.expreiments_id
  db.query(`SELECT * FROM records WHERE records.records_experiments = ${expreiments_id}`, (err, data) => {
    if (err){
      console.error(`||Error getting records by Experiments: ${expreiments_id}|| \n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.insertRecord = (req, res) => {
  //Rayhan mintanya pake method GET
  const scales_device = req.params.device
  const value = req.params.value //Dari IoT
  const timestamp = req.params.timestamp //Dari IoT
  const experiments = req.params.experiments //Param ini dimasukin 'manual' di web/androidnya

  //Ambil scale_id dari scale_device yang dipunya
  db.query(`SELECT * FROM scales WHERE scales_device = ${scales_device}`, (err, data) => {
    if (err){
      console.error(`||Error getting the scales_id from scale_device: ${scales_device}||\n${err.stack}`)
    }
    
  })


  db.query(`INSERT INTO records (records_id, records_value, records_timestamp, records_experiments) VALUE ('', '${value}', '${timestamp}', '${experiments}')`, (err, data) => {
    if (err){
      console.error(`||Error inserting record by experiment|| \n${err.stack}`)
    }

    response.ok('Recording data from ')
  })
}