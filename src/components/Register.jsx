import React from 'react'
import NavBar from './NavBar';


function Register() {
   return (
      <>
         <NavBar />
         <div className='container mt-5 pt-5 w-auto mx-auto'>
            <div className='container w-75 mx-auto bg-info p-3 rounded'>
               <h1 className='text-center bg-white rounded p-2 w-auto'>Sign Up</h1>
               <form>
                  <div className="form-floating mb-3">
                     <input type="text" className="form-control" id="username" placeholder="John Doe" />
                     <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" />
                     <label htmlFor="userEmail">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                     <input type="password" className="form-control" id="userPassword" placeholder="Password" />
                     <label htmlFor="userPassword">Password</label>
                  </div>
                  <div className='d-flex gap-2'>
                     <button type='submit' className='btn btn-dark w-100'>Register</button>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}

export default Register;