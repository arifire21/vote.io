import './App.css';
import Card from './components/Card';
import Subcard from './components/Subcard';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar'
import axios from 'axios';
import { Button } from '@mui/material';

function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get("http://localhost:5000/election").then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;

  // React.useEffect(() => {
  //   axios.get("http://localhost:5000/votes").then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;

  return (
    <div>
      <Navbar/>
      
      <Grid container spacing={1}  >
        <Grid item md={11.7}>
          <Card title = "Vote.io"
          content = "Where democracy meets technology"
          />
          </Grid>

        <Grid item md={5}>
        <Subcard subtitle = "Tampa Mayor Race" 
                name1 ="Person1"
                name2 ="Person2"
                // votesP1={post.}
        />
        </Grid>

        <Grid item md={5}>
        <Subcard subtitle = "USF 2022 Class President"
                      name1 ="Person1"
                      name2 ="Person2"
              />
        </Grid>
        <Grid item md={11.7}>
        <Subcard subtitle = "Your Votes"
                          name1 ="Person1"
                          name2 ="Person2"
                  />
        </Grid>
        
      </Grid>

      <Button variant="contained">Login</Button>
      
    </div>

    
  );
}

export default App;

