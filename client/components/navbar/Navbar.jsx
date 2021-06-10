import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Dropdown from './Dropdown'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const onMouseEnter = () => setOpen(true)

  const onMouseLeave = () => setOpen(false)

  return (
    <nav>
      <div>
        <h1>Art Blog</h1>
      </div>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to='/about'>About Me</Link>
          {open && <Dropdown />}
        </li>

        <li>
          <Link to='/store'>Store</Link>
        </li>

        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
