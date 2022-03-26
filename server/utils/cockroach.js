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
    async verifyConnection() {
        const pool = new Pool({ connectionString })
        try {
            const { rows } = await pool.query('SELECT NOW()')
            return rows.length > 0
        }
        catch (e) {
            return false
        }
    }
}