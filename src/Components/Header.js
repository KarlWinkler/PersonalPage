import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import '../styles/header.scss';
import '../styles/flex.scss';

const Header = (props) => {
  return (
    <div className='header-container'>
      <div className='flex-container flex-start'>
        <h1>Karl Winkler</h1>
      </div>
      <div className='flex-container'>
        <div><Link href='/' >Home</Link></div>
        <div><Link href='/trip' >Trips</Link></div>
        <div><Link href='/github/' >Github</Link></div>
      </div>
      <div className='flex-container flex-end'>
        <div><Link href='/login' >Login</Link></div>
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Header