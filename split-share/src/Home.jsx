import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Home.css'
import Particle from './Particle'

function Home() {
  return (
    <div id='mainDiv'>
        <Particle/>
        <nav id='navBar'> 
            <div>SPLIT SHARE - Exploring the Algorithm Behind Debt Sharing</div>
            <div id='navLink'>
                <Link to='/home' className='navButton'>Home</Link>
                <Link to='/working' className='navButton'>Working</Link>
                <Link to='/read' className='navButton'>Read</Link>
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Home