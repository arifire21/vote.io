import TestHeader from "../components/TestHeader";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";

export default function CreatePoll() {
  // const 

    return (
      <div>
        {/* <TestHeader/> */}
        <Navbar/>

          <h1>Create a Poll</h1>
          <div className="form-container">
            <div className="form-item">
              <TextField id="create-title" variant="filled" label="Title" required="true"/>
            </div>
            <div className="form-item">
              <TextField id="create-desc" variant="filled" multiline="True" minRows="3" maxRows="4" label="Description" required="true"/>
            </div>
            <div className="form-item">
              <TextField id="create-opt1" variant="filled" label="Option 1" required="true"/>
            </div>
            <div className="form-item">
              <TextField id="create-opt2" variant="filled" label="Option 2" required="true"/>
            </div>
            <div className="form-item submit-btn">
              <Button variant="contained">Submit</Button>
            </div>
          </div>
      </div>
    );
  }
  