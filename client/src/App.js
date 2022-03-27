import './App.css';

import TestHeader from './components/TestHeader';
import Card from './components/Card';
import Subcard from './components/Subcard';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div>
      <TestHeader/>
      <h1>Dashboard</h1>
      <Card title = "Vote.io"
      content = "where democracy meets technology"
      />

      <Grid container spacing={1}  >
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
      </Grid>
      <Subcard subtitle = "Your Votes"
                          name1 ="Person1"
                          name2 ="Person2"
                          name3 ="Person3"
                  />
    </div>

    
  );
}

export default App;

