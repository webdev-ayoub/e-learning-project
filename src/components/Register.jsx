import React from 'react'
import NavBar from './NavBar';


function Register() {
   return (
      <>
         <div className='container'>
            <div className='min-vh-100 d-flex flex-column'>
               <div className="card m-auto">
                  <h1 className='card-header text-center fw-bold text-center rounded p-2 w-auto'>Sign Up</h1>
                  <div class="card-body">
                     <form className='w-auto'>
                        <div className="form-floating mb-3">
                           <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                           <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                           <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                           <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                           <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                           <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className='d-flex gap-2'>
                           <button type='submit' className='btn btn-dark w-100'>Register</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Register;