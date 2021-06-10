import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import options from './DropdownItems'

// STYLES
import { Drop, Li } from './DropdownStyle'

const Dropdown = () => {
  return (
    <Drop>
      {
        options.map(option => {
          return (
            <Li key={option.title}>
              <Link className='link' to={option.path} >{option.title}</Link>
            </Li>
          )
        })
      }
    </Drop>
  )
}

export default Dropdown
