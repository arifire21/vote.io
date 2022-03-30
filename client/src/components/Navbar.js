import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import { ImHome} from 'react-icons/im';
import { RiLoginBoxFill} from 'react-icons/ri';
import { IoMdCreate} from 'react-icons/io';
// import { AiFillEye} from 'react-icons/ai';
import { FaRegistered} from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navlink-container">
                <div className="navlink-item">
                    <Tooltip title="Home" placement="right" arrow>
                        <IconButton size="large" aria-label="home">
                            <Link to="/" className="link"><ImHome/></Link>
                        </IconButton>
                    </Tooltip>
                </div>

                <div className="navlink-item">
                    <Tooltip title="Register" placement="right" arrow>
                        <IconButton size="large" aria-label="register">
                            <Link to="/create-account" className="link"><FaRegistered/></Link>
                        </IconButton>
                    </Tooltip>
                </div>

                <div className="navlink-item">
                    <Tooltip title="Login" placement="right" arrow>
                        <IconButton size="large" aria-label="login">
                            <Link to="/login" className="link"><RiLoginBoxFill/></Link>
                        </IconButton>
                    </Tooltip>
                </div>

                <div className="navlink-item">
                    <Tooltip title="Create Election" placement="right" arrow>
                        <IconButton size="large" aria-label="create-election">
                            <Link to="/create-poll" className="link"><IoMdCreate/></Link>
                        </IconButton>
                    </Tooltip>
                </div>

                {/* <div className="navlink-item">
                    <div className="navbar-tooltip">
                        <Tooltip title="View Polls" placement="right">
                            <Button variant="text" size="large">
                                <Link to="/view-poll"><AiFillEye color="white"/></Link>
                            </Button>
                        </Tooltip>
                    </div>    
                </div> */}
            </div>
        </div>
    );
}