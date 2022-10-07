import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setToken }) => {
    const handleSubmit = (e) => {
      setToken("");
    };
    
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link>|</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </nav>
    )
}

export default Navbar;