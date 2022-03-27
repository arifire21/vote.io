import TestHeader from "../components/TestHeader";
import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar/>

      <h1>Login to Vote.io</h1>
      <div className="form-container">
        <div className="form-item">
          <TextField id="filled-basic" variant="filled" label="Username" required="true"/>
        </div>
        <div className="form-item">
          <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              required="true"
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
