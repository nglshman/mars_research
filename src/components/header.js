import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_desc">
                <h1>Mars research</h1>
                    <ul>
                        <li><Link to="weather">Weather</Link></li>
                        <li><Link to="mars_rover">Mars rover photos</Link></li>
                    </ul>
            </div>
        </div>
    );
}

export default Header;