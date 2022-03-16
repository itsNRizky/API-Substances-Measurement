const Express = require('express')
const bodyParser = require('body-parser')

const response = require('./res')

const users = require('./Controller/User')
const experiments = require('./Controller/Experiments')
const scales = require('./Controller/Scales')
const records = require('./Controller/Records')

const app = Express()
const port = process.env.PORT || 3600

//Setup
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

//===========Route===============
app.get('/', (req, res) => {
  response.ok("Substance Measurement API works properly!", res)
})
//Scales
app.get('/api/scales', scales.getScalesAll)
app.post(`/api/scales/`, scales.insertScale)
app.put('/api/scales/', scales.updateScaleByID)
app.put('/api/scales/on/:id', scales.setScaleStateOnByID)
app.put('/api/scales/off/:id', scales.setScaleStateOffByID)
app.get('/api/scales/:id', scales.getScaleByID)
app.delete('/api/scales/:id', scales.deleteScaleByID)

//Users
app.get('/api/users/', users.getUserAll)
app.post('/api/users/', users.insertUser)
app.put('/api/users/', users.updateUserByID)
app.get('/api/users/:id', users.getUserByID)
app.delete('/api/users/:id', users.deleteUserByID)

//Experiments 
app.get('/api/experiments/', experiments.getExperimentsAll)
app.post('/api/experiments/', experiments.insertExperiment)
app.put('/api/experiments/', experiments.updateExperimentsByID)
app.put('/api/experiments/doing/:id', experiments.setExperimentsStateDoingByID)
app.put('/api/experiments/finished/:id', experiments.setExperimentsStateFinishedByID)
app.get('/api/experiments/user/:id', experiments.getExperimentsByUser)
app.get('/api/experiments/:id', experiments.getExperimentsByID)
app.delete('/api/experiments/:id', experiments.deleteExperimentByID)

//Records
app.get('/api/records/experiments/:id', records.getRecordsByExperimentsID)
app.get('/api/records/:device/:value/:timestamp', records.insertRecord)




app.listen(port, () => {
  console.log(`Substance Measurement API | Listening http://localhost:${port}`)
})