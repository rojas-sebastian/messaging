const apiServices = require('../controller/controller.js')

const router = app =>{
    app.use('/messaging/api/v1', apiServices)
}

module.exports = router