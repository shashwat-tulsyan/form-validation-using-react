import React from 'react'
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <section className='navi'>
        <div className='col-12'>
        <nav className="navbar navbar-light bg-dark p-4">

        <form className="container-fluid justify-content-end ">
        {/* <h1 className='task text-white justify-content-start '>TASK!</h1> */}

        <button className="btn btn-danger me-2 m-1" type="button"><NavLink className="a" to='/'>SignUp</NavLink></button>
        <button className="btn btn-danger me-2 m-1" type="button"><NavLink className="a" to='/login'>Login</NavLink></button>

        </form>

</nav>
        </div>
    </section>
    </>
  )
}

export default Nav