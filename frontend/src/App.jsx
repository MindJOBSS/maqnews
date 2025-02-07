import React from 'react'
import ThemeButton from './components/themeButton'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-base-300 text-base-content w-screen h-screen' >
      <div className="toast">
        <ThemeButton/>
      </div>
      <Navbar/>
    </div>
  )
}

export default App