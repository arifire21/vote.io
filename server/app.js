const express = require('express')
const req = require('express/lib/request')
const app = express()
app.use(express.json())
const { verifyConnection } = require('./utils/cockroach')


if (verifyConnection()) {
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



