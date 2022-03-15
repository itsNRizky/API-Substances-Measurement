const db = require('./db')
const response = require('./res')

exports.index = (req, res) => {
  response.ok("Substance Measurement API works properly!", res)
}

//Table scales
exports.getScalesAll = (req, res) => {
  db.query(`SELECT * FROM scales;`, (err, data) => {
    if (err){
      console.error(`||Error getting all scales data|| \n${err.stack}`)
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
  const id = req.body.id 
  const owner = req.body.owner
  db.query(`INSERT INTO scales (scales_id, scales_owner) VALUES ('${id}', '${owner}')`, (err) => {
    if (err){
      console.error(`||Error inserting scale data|| \n${err.stack}`)
    }

    response.ok('Scale inserted properly!', res)
  })
}

exports.deleteScaleByID = (req, res) => {
  const id = req.params.id
  db.query(`DELETE FROM scales WHERE scales.scales_id = ${id}`, (err) => {
    if (err){
      console.error(`||Error deleting scale by ID|| \n${err.stack}`)
    }

    response.ok(`Success deleting the scale!`, res)
  })
}

//KURANG EDIT

// Table Experiments
exports.getExperimentsByOwner = (req, res) => {
  const owner = req.params.id
  console.log(owner)
  db.query(`SELECT * FROM experiments WHERE experiments_id = '${owner}';`, (err, data) => {
    if (err){
      console.error(`||Error getting experiments data by owner|| \n${err.stack}`)
    }
    response.ok(data, res)
  })
}

exports.getExperimentsAll = (req, res) => {
  db.query(`SELECT * FROM experiments;`, (err, data) => {
    if (err){
      console.error(`||Error getting all experiments data|| \n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.insertExperiment = (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const desc = req.body.desc
  const owner = req.body.owner
  db.query(`INSERT INTO experiments (experiments_id, experiments_name, experiments_desc ,experiments_owner) VALUES ('${id}', '${name}', '${desc}', '${owner}');`, (err, data) => {
    if (err){
      console.error(`||Error inserting new experiment|| \n${err.stack}`)
    }

    response.ok('Experiment inserted properly!', res)
  })
}

exports.deleteExperimentByID = (req, res) => {
  const id = req.params.id
  db.query(`DELETE FROM experiments WHERE experiments.experiments_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error deleting experiment by ID|| \n${err.stack}`)
    }

    response.ok('Success deleting the experiment!', res)
  })
}

// KURANG UPDATE


// Table Records
exports.getRecordsByExperiment = (req, res) => {
  const experiment = req.params.experiment
  db.query(`SELECT * FROM records WHERE records.records_experiment = ${experiment}`, (err, data) => {
    if (err){
      console.error(`||Error getting records by Experiments|| \n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.insertRecord = (req, res) => {
  
}