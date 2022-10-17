import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import '../styles/background-swipe.scss';
import Name from './Name';

import '../styles/header.scss';
import '../styles/flex.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='flex-container flex-start'>
        <Name name='Karl Winkler' />
      </div>
      <div className='flex-container'>
        <div><a className='header-link background-swipe' href='/PersonalPage'>Home</a></div>
        <div><a className='header-link background-swipe' href='/PersonalPage/about'>About</a></div>
        <div><a className='header-link background-swipe' href='/PersonalPage/projects'>Projects</a></div>
      </div>
      <div className='flex-container flex-end'>
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Header