import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const NavBar = () => {
   return (
      <header>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
               <Link to="/" class="navbar-brand">E-learning</Link>
               <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <Link to='/' className="nav-link">Home</Link>
                     <Link to='/' className="nav-link">About</Link>
                     <Link to='/' className="nav-link courses-link">Courses
                        <KeyboardArrowDownIcon style={{ color: "#1275EA" }} />
                     </Link>
                     <Link to='/' className="nav-link">Tutors</Link>
                     <Link to="/" className="nav-link">Contact</Link>
                  </ul>
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-2">
                     <Link to={'/login'}>Login</Link>
                     <Link to={'/register'}>Register</Link>
                     <div className="box-2">
                        <ShoppingCartIcon className="shoping-cart" />
                     </div>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default NavBar;
