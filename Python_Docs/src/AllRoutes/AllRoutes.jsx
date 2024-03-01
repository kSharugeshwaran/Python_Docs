import React from 'react'
import {Routes, Route} from "react-router-dom"
import Cards from '../Components/Cards'
import Guide from '../Components/Guides/Beginner/Guide'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/home" element={<Cards/>}/>
        <Route path="/guide" element={<Guide/>}/>
    </Routes>
  )
}

export default AllRoutes
