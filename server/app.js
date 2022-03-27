const express = require('express')
const app = express()
app.use(express.json())
const cockroach = require('./utils/cockroach');
const tokenGen = require('random-token')
const token = () => tokenGen(20)
const connected = cockroach.verifyConnection()
const {auth} = require('./utils/auth');
const { findOne } = require('./utils/cockroach');

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
    // {firstname, lastname, username,password,pubKey,ssn}
    app.post('/create-account', async (req, res)=> {
        const {body} = req;
        const {username, password, pubKey, ssn, firstName, lastName} = body;
        // verify ssn with list of registered voters
        // create user
        const user_id = await cockroach.create('USERS', {username, password});
        // create account
        await cockroach.create('ACCOUNT', {f_name:firstName, l_name:lastName, user_id:user_id, ssn, pubkey:pubKey});
        // attach pubkey to user
        // return jwt
        const token = token();
        const issued_token = await cockroach.findWhere('TOKEN', {token:token});
        if (issued_token){
            console.log("Token already issued");
            return res.status(400).json({success:false, token:issued_token});
        }else{ 
            await cockroach.create('TOKEN',{token:token, user_id:user_id});
            return res.status(200).json({success:true, token:token});
        }
    })

    // login
    app.post('/login', async (req, res)=> {
        const {body} = req;
        const {username, password} = body;
        console.log(`username: ${username} | password: ${password}`)
        // return the jwt

    })

    // votes
    app.get('/votes', async(req, res)=> {
        const authenticated = await auth(req)
        if(authenticated){
            const allVotes = await cockroach.findAll('VOTES')
            res.status(200).json({success: true, data: allVotes})
        }
        else {
            res.status(403).json({success: false})
        }
        


        // return all active votes
    })

    // vote?id
    app.get('/vote', async (req, res)=> {
        const authenticated = await auth(req)
        if(authenticated){ 
            const {id} = req.params
            const vote = await cockroach.findOne('ELECTIONS',id)
            res.status(200).json({success: true, data: vote})
        }
        else res.status(403).json({success: false})
        
    })

    // create-vote
    app.post('/create-vote', (req, res)=> {
        const {body} = req;
        const {jwt, votingOptions} = body;
        // create entry in votes table
        // return vote id
    })

    // vote
    app.post('/vote', (req, res)=> {
        const {body} = req;
        const {jwt, signedVote} = body;
        // privkey signed vote submitted
        // verify vote with pubkey
        // tally verified votes
    })
}


app.listen(5000, () => {
    console.log('server started on port 5000')
})



