import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import { ImHome} from 'react-icons/im';

import { RiLoginBoxFill} from 'react-icons/ri';
import { IoMdCreate} from 'react-icons/io';
import { AiFillEye} from 'react-icons/ai';
import { FaRegistered} from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navlink-container">
                <div className="navlink-item">
                    <div className="navbar-tooltip">
                        <Tooltip title="Home" placement="right">
                            <Button variant="text" size="large">
                                <Link to="/"><ImHome color="white"/></Link>
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="navlink-item">
                    <div className="navbar-tooltip">
                    <Tooltip title="Register" placement="right">
                        <Button variant="text" size="small">
                            <Link to="/create-account"><FaRegistered color="white"/></Link>
                        </Button>
                    </Tooltip>
                    </div>
                </div>
                <div className="navlink-item">
                   <div className="navbar-tooltip">
                        <Tooltip title="Login" placement="right">
                            <Button variant="text" size="large">
                                <Link to="/login"><RiLoginBoxFill color="white"/></Link>
                            </Button>
                        </Tooltip>
                    </div>
                </div>

                <div className="navlink-item">
                    <div className="navbar-tooltip">
                        <Tooltip title="Create Election" placement="right">
                            <Button variant="text" size="large">
                                <Link to="/create-poll"><IoMdCreate color="white"/></Link>
                            </Button>
                        </Tooltip>
                    </div>
                </div>

                <div className="navlink-item">
                    <div className="navbar-tooltip">
                        <Tooltip title="View Polls" placement="right">
                            <Button variant="text" size="large">
                                <Link to="/view-poll"><AiFillEye color="white"/></Link>
                            </Button>
                        </Tooltip>
                    </div>    
                </div>
            </div>
        </div>
    );
}