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
                <Link>|</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;