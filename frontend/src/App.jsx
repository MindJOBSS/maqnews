import React from 'react'
import {Routes , Route} from "react-router-dom";
import ThemeButton from './components/themeButton'
import Navbar from './components/Navbar'
import Trending from './components/Trending'
import Recent from './components/Recent';
import ForYou from './components/ForYou';
import Search from './components/Search';

const App = () => {
  return (
    <div className='bg-base-300 text-base-content w-screen h-screen overflow-x-hidden' >
      <div className="toast z-20">
        <ThemeButton/>
      </div>
      <Navbar/>
      <Routes>
        <Route path='/trending' element = {<Trending/>} />
        <Route path='/' element = {<Recent/>} />
        <Route path='/foryou' element = {<ForYou/>} />
        <Route path='/search/:q' element = {<Search/>} />
      </Routes>
    </div>
  )
}

export default App