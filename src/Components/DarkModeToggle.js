import React from 'react'
import '../styles/theme-toggle.scss';

let toggleTheme = () => {
  console.log('click')
  let mainWrapper = document.querySelector('.app')
  let themeLabel = document.querySelector('.theme-label')

  mainWrapper.classList.toggle('dark')
  themeLabel.innerText == 'Light' ? themeLabel.innerText = 'Dark' : themeLabel.innerText = 'Light'
}

const DarkModeToggle = () => {
  return (
    <div className='theme-toggle'>
        <div><label className='theme-label'>Light</label></div>
      <label className='switch'>
        <input type='checkbox' className='switch-input' onChange={(e) => {toggleTheme(e)}} />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default DarkModeToggle