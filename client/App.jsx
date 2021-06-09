import React from 'react'

// COMPONENTS
import Navbar from './components/navbar/Navbar'

// STYLES
import { AppStyled } from './AppStyled'

const App = () => {
  return (
    <>
      <AppStyled>
        <Navbar />
      </AppStyled>
    </>
  )
}

export default App
