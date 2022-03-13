const Express = require('express')
const router = Express()
const controller = require('./controller')


router.get('/', controller.index)

router.get('/scales', controller.getScalesAll)