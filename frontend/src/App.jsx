import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Jobs from './components/Jobs/Jobs'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        {/* <Route path='/feauters' element={<Features/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
