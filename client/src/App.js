import './App.css';
// import Card from './components/Card';
// import Subcard from './components/Subcard';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container'
// import Navbar from './components/Navbar'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
// import { returnJWT } from './utils/security'
// import axios from 'axios';
import {Link} from 'react-router-dom'

function App() {

  // const [loaded, setLoaded] = useState(false)
  // const [entries, setEntries] = useState([])

  // async function api() {
  //   const jwt = await returnJWT()
  //   if (jwt) {
  //     const config = {
  //       headers: {
  //         'Authorization': `Bearer ${jwt}`
  //       }

  //     }
  //     const instance = axios.create({
  //       baseURL: 'http://localhost:5000',
  //       timeout: 1000,
  //       headers: { 'Authorization': `Bearer ${jwt}` }
  //     })
  //     const { data } = await instance.get('/elections')
  //     const { data: entries } = data
  //     setEntries(entries)
  //   }

  // }

  // useEffect(() => {
  //   api()
  // }, [])





  return (
  //   <div>
  //     <Navbar />

  //     <Container maxWidth={1300}>

  //       <Grid container spacing={1}  >
  //         <Grid item md={11.7}>
  //           <Card title="Vote.io"
  //             content="Where democracy meets technology"
  //           />
  //         </Grid>

  //         {entries.map(item => (
  //           <Grid item md={5}>
  //             <Subcard subtitle={item.name}>
  //               <h2><strong>{item.type}</strong></h2>
  //               <p>{item.description}</p>
  //               <Link to={`/view-poll?id=${item.id}`}>
  //                 <Button><p class="text-white">Vote</p></Button>
  //               </Link>
  //             </Subcard>
  //           </Grid>))}

  //       </Grid>

  //     </Container>

  //   </div>

  <div className='landing-container'>
    <h1 className='landing-item'>Vote.io</h1>
    <br/>
    <div className='landing-item'>
      <div className='landing-btn'>
      <Button variant='contained'>
        <Link to='/create-account' className='btn-link'>Register</Link>
      </Button>
    </div>

    <div className='landing-btn'>
    {/* <div className='landing-item'> */}
      <Button variant='contained'>
        <Link to='/login' className='btn-link'>Log In</Link>
      </Button>
      </div>
    </div>
  </div>

  );
}

export default App;

