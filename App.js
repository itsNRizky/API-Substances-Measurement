const Express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routers')

const app = Express()
const port = process.env.PORT || 3600

//Setup
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Substance Measurement API | Listening http://localhost:${port}`)
})