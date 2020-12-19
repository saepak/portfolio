import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Nav = () => {
  
    return (
        <div className='navWrap'>
            <nav className='navBox'>
                <ul className='navigation'>
                    <li>
                        <Button>
                            <Link to='/'>About Me</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='/Work'>Work</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='/Contact'>Contact</Link>
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
