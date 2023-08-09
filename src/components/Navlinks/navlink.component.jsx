import React from "react";
import {Link, Outlet} from 'react-router-dom';
import './navlinks.style.css'

const  Navlinks = () => {
    return ( 
        <div className="navlinks">
            <nav className="navlink">
                <img className="logo" src="./jt.png" alt="logo"/>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/package'>Packages</Link></li>
                    <li><Link to='/service'>Services</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className="buttons">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </nav>
            <Outlet />
        </div>
     );
}
 
export default Navlinks;