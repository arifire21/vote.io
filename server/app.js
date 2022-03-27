const express = require('express')
const crypto = require('crypto')
const app = express()
app.use(express.json())
const cockroach = require('./utils/cockroach');
const tokenGen = require('random-token')
const token = () => tokenGen(20)
const connected = cockroach.verifyConnection()
const { auth } = require('./utils/auth');
const { findOne } = require('./utils/cockroach');
const {getUserFromToken} = require('./utils/user')
const cors = require('cors')
app.use(cors())

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

(async function(){
    const result = await getUserFromToken('0miebmu5p1o888r6cph7')
    console.log(result)
})()

    app.get('/my-votes',async(req,res)=>{
        const authenticated = await auth(req)
        if(authenticated){
            const userId = await getUserFromToken(authenticated)
            const [{id:accountId}] = await cockroach.findWhere('ACCOUNTS',{user_id: userId})
            const myVotes = await cockroach.findWhere('VOTES',{account_id: accountId})
            if(myVotes)
                res.status(200).json({success: true, data: myVotes})
            else res.status(500).json({success:false})
        }
        else res.status(403).json({success:true})
    })

    // account creation
    // {firstname, lastname, username,password,pubKey,ssn} WORKIING
    app.post('/create-account', async (req, res) => {
        const { body } = req;
        const { username, password, pubkey, ssn, firstName, lastName } = body;
        const user_id = await cockroach.create('USERS', { username, password });
        await cockroach.create('ACCOUNT', { f_name: firstName, l_name: lastName, user_id: user_id, ssn, pubkey: pubkey });
        const _token = token();
        await cockroach.create('TOKEN', { token: _token, user_id: user_id });
        return res.status(200).json({ success: true, token: _token });

    })

    app.get('/candidates', async (req,res)=> {
        const authorization = await auth(req)
        if(authorization){
            const {election} = req.query
            console.log(election)
            const allWhere = await cockroach.findWhere('CANDIDATES',{election_id: election})
            console.log(allWhere)
            res.status(200).send({success: true, data: allWhere})
        }
        else res.status(403).json({success: false})
    })

    // login
    app.post('/login', async (req, res)=> {
        const {body} = req;
        const {username, password} = body;
        const [entry] = await cockroach.findWhere('USERS', {username});
        const _token = await cockroach.findWhere('TOKEN', {user_id: entry.id});
        
        if (password === entry.password){
            res.status(200).json({success: true, token: _token})
        }else{
            res.status(403).json({success: false});
        }
        // return the jwt
        
    })

    // votes
    app.get('/votes', async (req, res) => {
        const authenticated = await auth(req)
        if (authenticated) {
            const allVotes = await cockroach.findAll('VOTES')
            res.status(200).json({ success: true, data: allVotes })
        }
        else {
            res.status(403).json({ success: false })
        }



        // return all active votes
    })

    // GET ELECTION BY ID
    app.get('/election', async (req, res) => {
        const authenticated = await auth(req)
        if (authenticated) {
            const { id } = req.query
            const vote = await cockroach.findWhere('ELECTIONS', {id: id})
            console.log(vote)
            res.status(200).json({ success: true, data: vote })
        }
        else res.status(403).json({ success: false })

    })

    app.get('/elections', async(req,res) => {
        const authenticated = await auth(req)
        if(authenticated){
            const rows = await cockroach.findAll('ELECTIONS')
            
            res.status(200).json({"success": true, data: rows})
        }
        else res.status(403).json({"success": false})
    })

    // CREATE VOTE WORKING
    app.post('/create-election', async (req, res) => {
        const authenticated = await auth(req)
        if(authenticated){
            console.log('authenticated')
            const {candidates, election} = req.body
            const electionId = await cockroach.create('ELECTIONS',election)
            if(electionId){
                for(let i =0 ; i < candidates.length; i++){
                    const result = await cockroach.create('CANDIDATES',{...candidates[i], election_id: electionId})
                    if(!result){
                        return res.status(500).json({success: false})
                    }
                }
                return res.status(200).json({success: true})

            }
            else{
                return res.status(403).json({success: false})
            }
            
        }
        // create entry in votes table
        // return vote id
    })

    // vote
    app.post('/vote', async (req, res) => {
        const authorization = await auth(req)
        if(authorization){
            const {candidate,signature} = req.body
            console.log({...req.body})
            const userId = await getUserFromToken(authorization)
            
            const [entry] = await cockroach.findWhere('ACCOUNT',{user_id: userId})
            console.log(entry)
            const verifier = crypto.createVerify('RSA-SHA256');
            verifier.update(candidate)
            const {pubkey : pk} = entry
            if(verifier.verify(pk,signature,'base64')){
                const result = await cockroach.create({})
                res.send({success: true})
            }
            else{
                res.send({success: false})
            }

            


        }
    })
}


app.listen(5000, () => {
    console.log('server started on port 5000')
})



