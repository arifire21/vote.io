import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <Button variant="text" size="small">
                <Link to="/">Home</Link>
            </Button>
            <Button variant="text" size="small">
                <Link to="/login">Login</Link>
            </Button>
            <Button variant="text" size="small">
                <Link to="/create-poll">Create Poll</Link>
            </Button>
            <Button variant="text" size="small">
                <Link to="/view-poll">View Polls</Link>
            </Button>
        </div>
    );
}