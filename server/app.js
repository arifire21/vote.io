const express = require('express')
const app = express()
app.use(express.json())

// app.get('/', function (req, res) {
//     res.send('Hello!');
// })

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

app.listen(5000, ()=>{
    console.log('server started on port 5000')
})



