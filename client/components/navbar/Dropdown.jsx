import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import { MenuItems } from './MenuItems'

// STYLES

import {DropdownStyled} from './DropdownStyle'

const Dropdown = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <DropdownStyled
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {MenuItems.map(item => {
        return (
          <li key={item.title}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)} >
              {item.title}
            </Link>

          </li>
        )
      })}
    </DropdownStyled>
  )
}

export default Dropdown
