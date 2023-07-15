import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Home.css'
import Particle from './Particle'

function Home() {
  return (
    <div id='mainDiv'>
        {/* <Particle/> */}
        <nav id='navBar'>
            <div>SPLIT SHARE - Exploring the Algorithm Behind Debt Sharing</div>
            <div id='navLink'>
                <Link to='/' className='navButton'>Home</Link>
                <Link to='/about' className='navButton'>Read</Link>
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Home