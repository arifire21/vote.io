import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { doubleHash, generateAndSaveKeys } from "../utils/security";
import axios from 'axios'
import Grid from '@mui/material/Grid'




export default function NewUser() {
  const [login, setLogin] = useState({})
  const [registered, setRegistered] = useState(false)

  async function submit() {
    if (login.username && login.password && login.l_name && login.f_name && login.ssn) {
      const hashedSSN = await doubleHash(login.ssn)
      await generateAndSaveKeys()
      //get pub key
      setLogin(prev => ({ ...prev, ssn: hashedSSN }))
      try {
        const { data } = await axios.post('http://localhost:5000/create-account', {
          ...login
        })
        
        if (data.success) {
          setRegistered(true)
          const {jwt} = data
          document.cookie += 'jwt='+jwt+';'
          
        }

      }
      catch (e) {

      }
    }
  }

  return (
    <div>
      <Navbar />

      {(() => {
        if (registered) {
          return (
          <div>
            <h2 className="text-center">You Have Registered Successfully!</h2>
            <Grid container justifyContent="center" alignItems="center" mt={5}>
            <img src="/img/check.png" width="300px" className="text-center" />
            </Grid>
            
          </div>
          )
        }
        else {
          return (
            <div>

              <h1>Register to Vote.io</h1>
              <div className="form-container">

                <div className="form-item">
                  <TextField id="new-user-fn" variant="filled" label="Username" required="true" onChange={(e) => setLogin(prev => ({ ...prev, username: e.target.value }))} />
                </div>

                <div className="form-item">
                  <TextField id="new-user-fn" variant="filled" label="First Name" required="true" onChange={(e) => setLogin(prev => ({ ...prev, f_name: e.target.value }))} />
                </div>
                <div className="form-item">
                  <TextField id="new-user-ln" variant="filled" label="Last Name" required="true" onChange={(e) => setLogin(prev => ({ ...prev, l_name: e.target.value }))} />
                </div>

                <div className="form-item">
                  <TextField id="new-user-ln" variant="filled" label="SSN*" required="true" onChange={(e) => setLogin(prev => ({ ...prev, ssn: e.target.value }))} />
                  <p>*Social Security Numbers arey encrypted before they leave your browser</p>
                </div>


                <div className="form-item">
                  <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    variant="filled"
                    required="true"
                    onChange={(e) => setLogin(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>


                <div className="form-item submit-btn">
                  <Button variant="contained" onClick={() => submit()}>Register</Button>
                </div>
              </div>
            </div>
          )
        }
      })()}


    </div>
  );
}
