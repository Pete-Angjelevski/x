import styled from 'styled-components'

export const DropdownStyled = styled.ul`
  .downdown-menu {
    width: 200px;
    position: absolute; 
    top: 80px;
    list-style: none;
    text-align: start;
  }

  .dropdown-menu li {
    background: white;
    cursor: pointer;
  }

  .dropdown-menu li:hover {
    background: blue;
  }

  .dropdown-menu.clicked {
    display: none;
  }

  .dropdown-link {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
    padding: 16px;
  }
`
