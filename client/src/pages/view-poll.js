import '../App.css';
import Card from '../components/Card';
import Subcard from '../components/Subcard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import { returnJWT, sign } from '../utils/security'
import axios from 'axios';
import {Link,useLocation} from 'react-router-dom'






function App() {

    async function castVote(candidateId){
        const jwt = await returnJWT()
        const instance = axios.create({
            baseURL: 'http://localhost:5000',
            timeout: 10000,
            headers: { 'Authorization': `Bearer ${jwt}` }
          })
        
        const signedVote = await sign(candidateId)
        const postable = {
            candidate: candidateId,
            signature: signedVote
        }
        const {data} = instance.post('/vote',postable)

    }


    const {search:path} = useLocation()

  const [loaded, setLoaded] = useState(false)
  const [entry, setEntry] = useState({
    created_at: null,
    description: "",
    id: "",
    name: "",
    type: ""
  })
  const [votes,setVotes] = useState([])

  async function api() {
    
    const jwt = await returnJWT()
    if (jwt) {
      const config = {
        headers: {
          'Authorization': `Bearer ${jwt}`
        }

      }
      let query = ''
      if(path.includes('?id=')){
        query = path.split('?id=')[1]
      }
      const instance = axios.create({
        baseURL: 'http://localhost:5000',
        timeout: 10000,
        headers: { 'Authorization': `Bearer ${jwt}` }
      })
      const {data} = await instance.get(`/election?id=${query}`)
      const {data:entry} = data
      const [electionRow] = entry
      setEntry(electionRow)

      const {data:votesQuery} = await instance.get(`/candidates?election=${electionRow.id}`)
      const {data: votesArray} = votesQuery
      setVotes(votesArray)

      
    }

  }

  useEffect(() => {
    api()
  }, [])





  return (
    <div>
      <Navbar />

      <Container maxWidth={1300}>

        <Grid container spacing={1}  >
          <Grid item md={11.7}>
            <Card title={entry.name}
              content={entry.description}
            />
          </Grid>
          <Grid item md={12}>
          <h2 class="text-center">Candidates</h2>
          </Grid>
          
          {votes.map(item => (
          <Subcard subtitle={item.f_name + ' ' + item.l_name}>
             <p>Affiliation: <strong class="text-white">{item.affiliation}</strong></p>
             <Button onClick={() => castVote(item.id)}>VOTE</Button> 
          </Subcard>
          ))}

         

        </Grid>

      </Container>

    </div>


  );
}

export default App;

