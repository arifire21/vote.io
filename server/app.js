const express = require('express')
const req = require('express/lib/request')
const app = express()
app.use(express.json())
const {verifyConnection} = require('./utils/cockroach')
 


app.listen(5000, ()=>{
    console.log('server started on port 5000')
})



