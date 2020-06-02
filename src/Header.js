import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <a href="/" className="brand-logo ml-3">Casa do Código</a>
                    <ul id="nav-mobile" className="right">
                        <li><Link to='/'></Link></li>
                        <li><Link to='/'></Link></li>
                        <li><Link to='/'></Link></li>
                    </ul>
                </div>
            </nav>
    );
}
export default Header;