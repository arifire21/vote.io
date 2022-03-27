import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navlink-container">
                <div className="navlink-item">
                    <Button variant="text" size="small">
                        <Link to="/">Home</Link>
                    </Button>
                </div>
                <div className="navlink-item">
                    <Button variant="text" size="small">
                        <Link to="/new-user">Register</Link>
                    </Button>
                </div>
                <div className="navlink-item">
                    <Button variant="text" size="small">
                        <Link to="/login">Login</Link>
                    </Button>
                </div>
                <div className="navlink-item">
                    <Button variant="text" size="small">
                        <Link to="/create-poll">Create Poll</Link>
                    </Button>
                </div>
                <div className="navlink-item">
                    <Button variant="text" size="small">
                        <Link to="/view-poll">View Polls</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}