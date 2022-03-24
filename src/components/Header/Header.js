import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>MeadDb</h1>
            <ul className='navbar'>                
                <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/contact'>Contact</a></li>
                <input type="text" placeholder="Search" />
                <button className='btn'>Search</button>
            </ul>
        </div>
    );
};

export default Header;