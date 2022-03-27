import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import axios from "axios";

export default function CreatePoll() {
  // const axios = require('axios');

  const [title, setTitle] = useState('');
  const titleChange = e => setTitle(e.target.value);
  const [desc, setDesc] = useState('');
  const descChange = e => setDesc(e.target.value);
  const [opt1, setOpt1] = useState('');
  const opt1Change = e => setOpt1(e.target.value);
  const [opt2, setOpt2] = useState('');
  const opt2Change = e => setOpt2(e.target.value);

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     option1: this.state.option1,
  //     option2: this.state.option2,
  //   };

  //   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

    return (
      <div>
        <Navbar/>

          <h1>Create a Poll</h1>
          <form action="" method="post">
            <div className="form-container">
              <div className="form-item">
                <TextField id="create-title" variant="filled" label="Title" required="true" value={title} onChange={titleChange}/>
              </div>
              <div className="form-item">
                <TextField id="create-desc" variant="filled" multiline="True" minRows="3" maxRows="4" label="Description" required="true" value={desc} onChange={descChange}/>
              </div>
              <div className="form-item">
                <TextField id="create-opt1" variant="filled" label="Candidate 1" required="true" value={opt1} onChange={opt1Change}/>
              </div>
              <div className="form-item">
                <TextField id="create-opt2" variant="filled" label="Candidate 2" required="true" value={opt2} onChange={opt2Change}/>
              </div>
              <div className="form-item submit-btn">
                <span style={{ cursor: 'not-allowed' }}>
                  <Button variant="contained" disabled={!title || !desc || !opt1 || !opt2 }>Submit</Button>
                </span>
              </div>
            </div>
          </form>
      </div>
    );
  }
  