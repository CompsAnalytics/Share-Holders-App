import React from 'react'
import Login from '../Authentication/Login';
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='nav-items'>
            <div className='header1'>
                {/* <img src={logo}/> */}
        <h1 className='th'>Metropolitan Hospital Sacco</h1>
        </div>
        <div >
        <nav  >
           <ul>
          <li className='link'><Link to ="/Login"><button className='b1'>Login</button></Link></li>  
          <li className='link'> <Link to="/SignUp"> <button className='bs'>Create an account</button></Link></li> 
          </ul> 
            </nav>
            </div>
        </div>
        
        <Login/>
    </div>
  )
}

export default Navbar