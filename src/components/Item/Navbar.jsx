import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/IndexStyle.css'
export const Navbar = () => {
  return (
    <nav className='nav'>
         <NavLink className="navlink" to='/'>Home</NavLink>  
         <NavLink className="navlink" to='/bikinis'>Bikinis</NavLink>  
          <NavLink className="navlink" to='/bombachas'>Bombachas</NavLink>
    </nav>
  )
}
