import React from 'react'
import Nav from './nav'
import Footer from './footer'
const Login = () => {
  return (
    <>
    <Nav/>
    <section className='container'>
        <div className='row'>
         <div className='col'>

        <section className='login mt-5 p-5'>
     <h1 className='text-center mb-4'>Welcome User </h1>

       <div className='mt-3'>

    <form className='col-xl-12 col-12 mt-5'>
    
    <div className="col-auto mb-3 mt-5">
    <input type="email" name='email' placeholder='Enter your email address' id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
    <div className="mb-3">
    <input type="Password" placeholder='Enter your password' className="form-control" id="exampleInputPassword1"/>
    </div>
    </form>
    <button type="submit" onClick="" className="text-center btn btn-dark ">Login</button>

       </div>
    </section>   
       

         </div>
         <div className='col'>
         <div className='mt-1'>
          <img src='./img/login.png' width="600" height="500" alt='image ha'/>
      </div>

         </div>
        </div>
        
    </section>
    <Footer/>
    </>
  )
}

export default Login