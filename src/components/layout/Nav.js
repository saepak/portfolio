import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';



const Nav = () => {
  
    return (
        <div className="navWrap">
            <nav className="navBox">
                <ul className="navigation">
                    <li>
                        <Button>
                            <Link to="/">
                                <AccountCircleOutlinedIcon style={{ color: 'white' }}/>
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to="/Work">
                                <DevicesOutlinedIcon style={{ color: 'white' }}/>
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to="/Contact">
                                <PhoneInTalkOutlinedIcon style={{ color: 'white' }}/>
                            </Link>
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
