import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NewUser() {
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');

    // function to update state of password with
    // value enter by user in form
    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
    }
    // function to update state of confirm password
    // with value enter by user in form
    const handleConfPasswordChange =(e)=>{
        setConfPassword(e.target.value);
    }
    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{
    if(password!=confPassword)
        {
            // if 'password' and 'confirm password'
            // does not match.
            alert("Passwords do not match.");
        }
    }

    return (
      <div>
        <Navbar/>

          <h1>Register to Vote.io</h1>
          <div className="form-container">
            <div className="form-item">
              <TextField id="new-user-fn" variant="filled" label="First Name" required="true"/>
              <TextField id="new-user-ln" variant="filled" label="Last Name" required="true"/>
            </div>
            <div className="form-item">
              <TextField id="new-user-email" variant="filled" label="Email" required="true"/>
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
              <Button variant="contained">Register</Button>
            </div>
          </div>
      </div>
    );
  }
  