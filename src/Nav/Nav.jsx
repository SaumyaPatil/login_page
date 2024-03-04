import React from 'react'
import SC_logo from '../assets/SC_logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="topBar">
            <div className="container">
                <div className="nav-left">
                    <img src={SC_logo} alt="SC-logo" className='SC-logo'/>
                </div>
                <div className="nav-right">
                    <a 
                        target='_blank'
                        className='home-page-link'
                        href="https://www.google.com/"
                        rel='noreferrer'
                    >
                        Home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Nav;