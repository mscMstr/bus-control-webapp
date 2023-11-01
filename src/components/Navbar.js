import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = ({ setToken }) => {
    const handleSubmit = (e) => {
      setToken("");
    };
    
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link>|</Link>
                <Link to="/dashboardNavyPier">Navy Pier</Link>
                <Link>|</Link>
                <Link to="/dashboardRed">Red</Link>
                <Link>|</Link>
                <Link to="/dashboardBrown">Brown</Link>
                <Link>|</Link>
                <Link to="/dashboardBlue">Blue</Link>
            </div>
        </nav>
    )
}

export default Navbar;