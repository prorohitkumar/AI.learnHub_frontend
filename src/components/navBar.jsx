import React from 'react';
import './navBar.css';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as needed

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                    AI.LearnHub
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/courses">
                    <button className="view-courses-button">VIEW ALL COURSES</button>
                </Link>
                <Link to="/upload">
                    <button className="upload-courses-button">UPLOAD COURSES</button>
                </Link>
                <Link to="/profile">
                    <div className="navbar-profile">
                        <AccountCircle style={{ color: '#fff', fontSize: 40 }} />
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
