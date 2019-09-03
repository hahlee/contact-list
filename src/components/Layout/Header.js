import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <img src="https://www.deltek.com/~/media/images danielle/tbt - odd sizes/logos/header-logo.ashx?h=56&la=en&w=195&=67B4B90F4363C6F792A4FC960BEABF19CF0D0B1B" style={{ width: '120px', height: '34px' }} alt=""/>
                <h1>Contact List</h1>
                <div className="nav">
                    <Link style={linkStyle} to="/">Home</Link>|<Link style={linkStyle} to="/about">About</Link>
                </div>
            </div>           
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;