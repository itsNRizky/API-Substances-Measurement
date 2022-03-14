const Express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routers')
const controller = require('./controller')

const app = Express()
const port = process.env.PORT || 3600

//Setup
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

app.get('/', controller.index)
app.get('/scales', controller.getScalesAll)
app.post(`/scales/add`, controller.insertScale)
app.get('/scales/:id', controller.getExperimentsByOwner)

app.listen(port, () => {
  console.log(`Substance Measurement API | Listening http://localhost:${port}`)
})