const { Client } = require('pg')
require('dotenv').config();
const connectionString = process.env.CONN
const client = new Client({ connectionString })
const {formatObj} = require('./dbformatter')
const format = require('pg-format')

client.connect()


module.exports = {
    async findAll(collection){
        try{
            const sql = format(`SELECT * FROM ${ format('%s',collection)}`)
            const {rows} = await client.query(sql)
            return rows
        }
        catch(e){
            return null
        }
    },
    async findOne(collection,id){
        try{
            const sql = `SELECT * FROM ${ format('%s',collection)} where id = ${ format('%s',id)}`
            const {rows} = await client.query(sql)
            return [rows]
        }
        catch(e){
            return null
        }
    },
    async findWhere(collection,entry){
        try{
            const {keys,values,placeholderValues} = formatObj(entry)
            const mappedSearch = keys.map((item,idx) => `${item} = ${placeholderValues[idx]}`).join(" AND ")
            console.log(collection)
            const sql = `SELECT * FROM ${ format('%s',collection)} WHERE ${mappedSearch};`
            const query ={
                text: sql,
                values
            }
            const {rows} = await client.query(query)
            console.log(values)
            return rows
        }
        catch(e){
            console.log(e)
            return null
        }
        
    },
    async create(collection, entry) {
        try {
            const {keys,values, placeholderValues} = formatObj(entry)
            const sql =  `INSERT INTO ${ format('%s',collection)} (${keys.join(',')}) VALUES(${placeholderValues.join(',')}) RETURNING ID`
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
            const {keys,values, placeholderValues} = formatObj(entry)
            const updateStatement = keys.map((item,idx) => `${item} = ${placeholderValues[idx]}`).join(',')
            const sql = `UPDATE ${ format('%s',collection)} SET ${updateStatement} WHERE id = '${ format('%s',id)}'`
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
            const sql = `DELETE FROM ${ format('%s',collection)} WHERE ID = '${ format('%s',id)}'`
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
   
}

