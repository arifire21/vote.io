import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

class NewUser extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    password: '',
    username:'',
    ssn: '',
  }

  handleFirstNameChange = event => {
    this.setState({ first_name: event.target.value });
  }

  handleLastNameChange = event => {
    this.setState({ last_name: event.target.value });
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  handleSSNChange = event => {
    this.setState({ ssn: event.target.value });
  }
 
  handleSubmit = event => {
    event.preventDefault();
 
    const userData = {
      username: this.state.username,
      password: this.state.password,

      ssn: this.state.ssn,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };
 
    axios.post(`http://localhost:5000/create-account`, { userData })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

    render() {
    return (
      <div>
        <Navbar/>

          <h1>Register to Vote.io</h1>
          <div className="form-container">
            <div className="form-item">
              <TextField id="new-user-fn" variant="filled" label="First Name" required="true" onChange={this.handleFirstNameChange}/>
              <TextField id="new-user-ln" variant="filled" label="Last Name" required="true" onChange={this.handleLastNameChange}/>
            </div>
            <div className="form-item">
              <TextField id="new-username" variant="filled" label="Username" required="true" onChange={this.handleUsernameChange}/>
            </div>
            <div className="form-item">
              <TextField id="new-ssn" variant="filled" label="SSN" required="true" onChange={this.handleSSNChange}/>
            </div>

            <div className="form-item">
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    variant="filled"
                    required="true"
                    onChange={this.handlePasswordChange}
                />
            </div>

            <div className="form-item submit-btn">
              <Button variant="contained" onSubmit={this.handleSubmit}>Register</Button>
            </div>
          </div>
      </div>
    );
  }
}
export default NewUser;