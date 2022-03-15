const Express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routers')
const controller = require('./Controller/User')
const response = require('./res')

const app = Express()
const port = process.env.PORT || 3600

//Setup
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  response.ok("Substance Measurement API works properly!", res)
})
app.get('/scales', controller.getScalesAll)
app.post(`/scales/add`, controller.insertScale)
app.get('/scales/:id', controller.getExperimentsByOwner)

app.listen(port, () => {
  console.log(`Substance Measurement API | Listening http://localhost:${port}`)
})