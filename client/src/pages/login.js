import TestHeader from "../components/TestHeader";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      {/* <TestHeader/> */}

      {/* custom nav header bc this is an isolated page */}
      <header>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link>
        </nav>

      </header>

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
          <Button variant="contained">Login</Button>
        </div>
      </div>
    </div>
  );
}
