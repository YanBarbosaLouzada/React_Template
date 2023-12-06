import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div>
      <body >  
        <nav className='body-nav'>
          <div class="navbar-container">
            <a class="logo">MeuLogo</a>
            <ul>
              <li><Link to={'/Home'}>Home</Link></li>
              <li><Link to={'/Get'}>Get</Link></li>
              <li><Link to={'/Post'}>Post</Link></li>
              <li><Link to={'/Home'}>Home</Link></li>
              
            </ul>
          </div>
        </nav>
      </body>
    </div>
  )
}

export default Navbar