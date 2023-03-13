import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo-section">
                    <Link to="/">E-learning</Link>
                </div>
                <ul className="link-section">
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/' className="courses-link">Courses <KeyboardArrowDownIcon style={{ color: "#1275EA" }} /></Link>
                    <Link to='/'>Tutors</Link>
                    <Link to="">Contact</Link>
                </ul>
                <div className="login-section">
                    <div className="box-1">
                        <Link>Login</Link>
                        <Link>Register</Link>
                    </div>
                    <div className="box-2">
                        <ShoppingCartIcon className="shoping-cart" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
