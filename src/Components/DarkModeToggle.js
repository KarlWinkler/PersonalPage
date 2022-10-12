import React from 'react'
import '../styles/theme-toggle.scss';

let toggleTheme = () => {
  console.log('click')
  let mainWrapper = document.querySelector('.app')
  mainWrapper.classList.toggle('dark')
}

const DarkModeToggle = () => {
  return (
    <div className='theme-toggle' onClick={(e) => {toggleTheme(e)}}>DarkModeToggle</div>
  )
}

export default DarkModeToggle