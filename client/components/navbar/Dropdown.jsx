import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS

import options from './DropdownItems'

const Dropdown = () => {
  return (
    <ul>
      {
        options.map(option => {
          return (
            <li key={option.title}>
              <Link to={option.path} >{option.title}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Dropdown
