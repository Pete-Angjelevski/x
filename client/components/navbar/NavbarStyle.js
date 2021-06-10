import styled from 'styled-components'

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  height: 80px;
  width: 100%;
  background: slateblue;
`

export const List = styled.ul`

  list-style-type: none;
  position: absolute; 
  bottom: 15%;
  right: 0;
  
  li {

    display: inline;
    padding: 10px;
    margin: 5px; 
    border-radius: 4px;
    background: white;

    .link {

      text-decoration: none;
    }
  
  }
 
`
