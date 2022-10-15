const ormPostgres =  require('../orm/orm-messages')
const {SENDER_PHONE_NUMBER} = require('../../util/env')
const twilioClient = require('../repositories/repository-twilio')

const getAll = async (req,res) => {
    try {
        let respOrm = await ormPostgres.getAll();
        res.send(respOrm)

    } catch (error) {
        res.status(400).send('hola no se')
    }
}

const create = async(req, res) => {
    const message = req.query
    

    twilioClient.messages.create({
        body:message.body,
        from:SENDER_PHONE_NUMBER,
        to:message.reciver
    })

    try {
        let saved = await ormPostgres.createOne(message);   
        res.send(saved)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAll,
    create
}