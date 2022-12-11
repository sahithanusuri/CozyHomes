import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Login from './pages/Login/Login'
import Home from './pages/Home.js'
import Mainpage from './pages/Mainpage.js'
//import Ratingspage from './pages/Ratingspage.js'
import Registerpage from './pages/Registerpage.js'
import Loginpage from './pages/Loginpage.js'
import Ratings from './pages/Ratings.js'
// import New from './pages/New/New'


const Rerouting = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Mainpage />}/> 
                <Route path="/Home" element={<Home />} />
                <Route path="/ratings" element={<Ratings />}/>
                <Route path="/loginpage" element={<Loginpage />}/>
                <Route path="/registerpage" element={<Registerpage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rerouting