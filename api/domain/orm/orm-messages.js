const conn = require('../repositories/repository-postgres.js')

const getAll = async () => {
    const res = await conn.query('SELECT * from messages')
    return res.rows
}

const createOne = (message) => {
    conn.query('insert into messages(body, datesent, reciver) values ($1,$2,$3)',Object.values(message))
    res.send(message)
}

module.exports = {
    getAll,
    createOne
}