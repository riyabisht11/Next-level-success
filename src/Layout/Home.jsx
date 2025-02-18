import React from 'react'
import Hero from '../Components/Home/Hero'
import Guest from '../Components/Home/Guest'
import Learn from '../Components/Home/Learn'
import Mobilehome from '../Components/Home/Mobilehome'
import { Outlet } from 'react-router'

function Home() {
  return (
    <div>
        <>
        <Mobilehome/>
      
        <Hero/>
        <Guest/>
        <Learn/>
    
        </>
      
    </div>
  )
}

export default Home
