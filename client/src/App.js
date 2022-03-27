import './App.css';
import Card from './components/Card';
import Subcard from './components/Subcard';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar'

function App() {
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
                name3 ="Person3"
        />
        </Grid>

        <Grid item md={5}>
        <Subcard subtitle = "USF 2022 Class President"
                      name1 ="Person1"
                      name2 ="Person2"
                      name3 ="Person3"
              />
        </Grid>
        <Grid item md={11.7}>
        <Subcard subtitle = "Your Votes"
                          name1 ="Person1"
                          name2 ="Person2"
                          name3 ="Person3"
                  />
        </Grid>
        
      </Grid>
      
    </div>

    
  );
}

export default App;

