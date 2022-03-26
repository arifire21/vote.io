const { Pool } = require('pg')
require('dotenv').config();
const connectionString = process.env.CONN
console.log(connectionString)

module.exports = {
    create() {

    },
    update() {

    },
    delete() {

    },
    verifyConnection() {
        const pool = new Pool({ connectionString })
        pool.query('SELECT NOW()', (err, res) => {
            console.log(err, res)
            pool.end()
        })
    }
}