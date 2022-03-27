import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class NewUser extends React.Component {


  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  handleFirstNameChange = event => {
    this.setState({ first_name: event.target.value });
  }

  handleLastNameChange = event => {
    this.setState({ last_name: event.target.value });
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }
 
  handleSubmit = event => {
    event.preventDefault();
 
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
 
    console.log(user)
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
              <TextField id="new-user-email" variant="filled" label="Email" required="true" onChange={this.handleEmailChange}/>
            </div>
           {/* <div className="form-item">
              <TextField id="new0user-pw" variant="filled" label="Passw" required="true"/>
            </div> */}

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

            <div className="form-item">
                <TextField
                    id="filled-password-input"
                    label="Confirm Password"
                    type="password"
                    variant="filled"
                    required="true"
                />
            </div>

            <div className="form-item submit-btn">
              <Button variant="contained" onClick={() => handleSubmit()}>Register</Button>
            </div>
          </div>
      </div>
    );
  }
}
