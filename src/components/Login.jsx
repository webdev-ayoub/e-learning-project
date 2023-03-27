import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Login() {
   return (
      <>
         <NavBar />
         <div className='container mt-5 pt-5 w-auto mx-auto'>
            <div className='container w-75 mx-auto bg-info p-3 rounded'>
               <h1 className='text-center bg-white rounded p-2 w-auto'>Sign In</h1>
               <form>
                  <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                     <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                     <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                     <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className='d-flex gap-2'>
                     <button type='submit' className='btn btn-dark w-100'>Login</button>
                     <Link to={'/register'} className="btn btn-success w-100">Register here</Link>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}

export default Login;
