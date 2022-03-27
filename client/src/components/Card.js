import React from 'react'
import Grid from '@mui/material/Grid'

export default function Card(props) {
  return (
    // <>
    <div className='vote'>
      <Grid container p={5}>
      <Grid item xs={6}>
      <div className='voteTitle'>{props.title}</div>
      <div className="voteBody">
        <div className='voteContent'>
          {props.content}
        </div>
      </div>
      </Grid>
      <Grid item xs={6}>
        <img src="/img/vote.png" width="100%"/>
      </Grid>
      </Grid>
      


    </div>

    // </>  

  )
}