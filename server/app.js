const express = require('express')
const app = express()
app.use(express.json())
const cockroach = require('./utils/cockroach');

const connected = cockroach.verifyConnection()

/* 
findAll(collection) -> rows []
findOne(collection,id) -> row
findWhere(collection,entry(JSON key values of columns)) -> rows []
create(collection, entry(JSON)) -> new ID
update(collection,id,entry(JSON)) -> boolean
delete(collection,id) -> boolean
verifyConnection() -> boolean


*/


connected ? console.log('connected to cockroach') : console.log('there was an error with the database connection')

if (connected) {
    // account creation
    app.post('/create-account', function (req, res) {

    })

    // votes
    app.get('/votes', function (req, res) {
        res.send('votes page');
    })

    // vote
    app.get('/vote?id=', function (req, res) {
        res.send('individual vote for id page');
    })
}


app.listen(5000, () => {
    console.log('server started on port 5000')
})



