import React, {useState} from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }
 
  handleSubmit = event => {
    event.preventDefault();
 
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
 
    axios.post(`http://localhost:5000/login`, { userData })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

render() {
  return (
    <div>
      <Navbar/>

      <h1>Login to Vote.io</h1>
      <div className="form-container">
        <div className="form-item">
          <TextField id="filled-basic" variant="filled" label="Username" required="true" onChange={this.handleUsernameChange}/>
        </div>
        <div className="form-item">
          <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              required="true"
              onChange={this.handlePasswordChange}
            />
        </div>
        <div className="form-item submit-btn">
            <span style={{ cursor: 'not-allowed' }}>
              <Button variant="contained">Login</Button>
            </span>
          </div>
      </div>
    </div>
  );
  }
}

export default Login;
