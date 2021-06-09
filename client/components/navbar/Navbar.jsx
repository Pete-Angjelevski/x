import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Dropdown from './Dropdown'
import { Button } from './Button'

// STYLES
import { NavbarStyled } from './NavbarStyle'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropDown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <NavbarStyled className='navbar'>
      <Link to='/' className='navbar-logo'>HI</Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <li className="nav-item">
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
            About Me <i className='fas fa-caret-down' />
          </Link>
          {dropDown && <Dropdown />}
        </li>

        <li className="nav-item">
          <Link to='/store' className='nav-links' onClick={closeMobileMenu}>
            Store
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
            Cart
          </Link>
        </li>
      </ul>
    </NavbarStyled>
  )
}

export default Navbar
