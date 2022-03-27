const { Client } = require('pg')
require('dotenv').config();
const connectionString = process.env.CONN
const client = new Client({ connectionString })
const {format} = require('./dbformatter')

client.connect()

module.exports = {
    async findAll(collection){
        try{
            const sql = `SELECT * FROM ${collection};`
            const {rows} = await client.query(sql)
            return rows
        }
        catch(e){
            return null
        }
    },
    async findOne(collection,id){
        try{
            const sql = `SELECT * FROM ${collection} where id = '${id}';`
            const {rows} = await client.query(sql)
            return rows
        }
        catch(e){
            return null
        }
    },
    async findWhere(collection,entry){
        try{
            const {keys,values,placeholderValues} = format(entry)
            const mappedSearch = keys.map((item,idx) => `${item} = ${placeholderValues[idx]}`).join(" AND ")
            const sql = `SELECT * FROM ${collection} WHERE ${mappedSearch};`
            const query ={
                text: sql,
                values
            }
            const {rows} = await client.query(query)
            return rows
        }
        catch(e){
            console.log(e)
            return null
        }
        
    },
    async create(collection, entry) {
        try {
            const {keys,values, placeholderValues} = format(entry)
            const sql =  `INSERT INTO ${collection} (${keys.join(',')}) VALUES(${placeholderValues.join(',')}) RETURNING ID;`
            const query = {
                text: sql,
                values
            }
            const {rows} = await client.query(query)
            const [{id}] = rows
            return id
            
        }
        catch (e) {
            console.log(e)
            return null
        }
    },
    async update(collection, id, entry) {
        try {
            const {keys,values, placeholderValues} = format(entry)
            const updateStatement = keys.map((item,idx) => `${item} = ${placeholderValues[idx]}`).join(',')
            const sql = `UPDATE ${collection} SET ${updateStatement} WHERE id = '${id}';`
            const query = {
                text: sql,
                values
            }
            
            await client.query(query)
            return true
            

        }
        catch (e) {
            return false
        }
    },
    async delete(collection, id) {
        try {
            const sql = `DELETE FROM ${collection} WHERE ID = '${id}';`
            await client.query(sql)
            return true
            
        }
        catch (e) {
            return false
        }
    },
    async verifyConnection() {
        try {
            const { rows } = await client.query('SELECT NOW()')
            return rows.length > 0
        }
        catch (e) {
            return false
        }
    },
    async testSelect() {
        try {
            const { rows } = await client.query('SELECT * FROM USERS')
            console.log(rows)
        }
        catch (e) {
            console.log(e)
        }
    }
}

