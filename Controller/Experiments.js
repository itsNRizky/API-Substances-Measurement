const db = require('../db')
const response = require('../res')

exports.getExperimentsByID = (req, res) => {
  const id = req.params.id
  db.query(`SELECT * FROM experiments WHERE experiments_id = '${id}'`, (err, data) => {
    if (err){
      console.error(`||Error getting experiments data by ID: ${id}|| \n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.getExperimentsByUser = (req, res) => {
  const user_id = req.params.id
  db.query(`SELECT * FROM experiments WHERE experiments_user = '${user_id}'`, (err, data) => {
    if (err){
      console.error(`||Error getting experiments data by user: ${user_id}|| \n${err.stack}`)
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
  const name = req.body.name
  const desc = req.body.desc
  const user = req.body.user
  const scales = req.body.scales
  db.query(`INSERT INTO experiments (experiments_id, experiments_name, experiments_desc ,experiments_state, experiments_user, experiments_scales) VALUES ('', '${name}', '${desc}', 'start', '${user}', '${scales}');`, (err, data) => {
    if (err){
      console.error(`||Error inserting new experiment|| \n${err.stack}`)
    }

    response.ok(`Experiment "${name}" inserted properly!`, res)
  })
}

exports.deleteExperimentByID = (req, res) => {
  const id = req.params.id
  db.query(`DELETE FROM experiments WHERE experiments.experiments_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error deleting experiment by ID: ${id}|| \n${err.stack}`)
    }

    response.ok('Success deleting the experiment!', res)
  })
}

exports.updateExperimentsByID = (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const desc = req.body.desc
  db.query(`UPDATE experiments SET experiments_name = '${name}', experiments_desc = '${desc}' WHERE experiments.experiments_id = ${id}`, (err, data) => {
    if (err){
      console.error(`||Error updating experiments "${id}"||\n${err.stack}`)
    }

    response.ok(`Success updating experiments data by ID: ${id}`, res)
  })
}

exports.setExperimentsStateDoingByID = (req, res) => {
  const id = req.params.id
  db.query(`UPDATE experiments SET experiments_state = 'doing' WHERE experiments.experiments_id = '${id}'`, (err, data) => {
    if (err){
      console.error(`||Error setting experiments: ${id}'s state to DOING||\n${err.stack}`)
    }

    response.ok(`Success setting experiemnts: ${id}'s state to DOING`, res)
  })
}

exports.setExperimentsStateFinishedByID = (req, res) => {
  const id = req.params.id
  db.query(`UPDATE experiments SET experiments_state = 'finished' WHERE experiments.experiments_id = '${id}'`, (err, data) => {
    if (err){
      console.error(`||Error setting experiments: ${id}'s state to FINISHED||\n${err.stack}`)
    }

    response.ok(`Success setting experiemnts: ${id}'s state to FINISHED`, res)
  })
}