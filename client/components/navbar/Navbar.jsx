import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Dropdown from './Dropdown'

// STYLES
import { Nav, List} from './NavbarStyle'


const Navbar = () => {
  const [open, setOpen] = useState(false)

  const onMouseEnter = () => setOpen(true)

  const onMouseLeave = () => setOpen(false)

  return (
    <Nav>
      <div>
        <h1>Art Blog</h1>
      </div>

      <List>
        <li>
          <Link className="link" to='/'>Home</Link>
        </li>

        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link className="link" to='/about'>About Me</Link>
          {open && <Dropdown />}
        </li>

        <li>
          <Link className="link" to='/store'>Store</Link>
        </li>

        <li>
          <Link className="link" to='/cart'>Cart</Link>
        </li>
      </List>
    </Nav>
  )
}

export default Navbar
