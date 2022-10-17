import React, { useEffect } from 'react'
import '../styles/theme-toggle.scss';

const DarkModeToggle = () => {

  let mode = localStorage.getItem('mode') || 'dark'

  useEffect(() => {
    setTheme(mode)
  }, [])

  let toggleTheme = () => {
    mode = mode === 'dark' ? 'light' : 'dark'
    setTheme(mode)
  }

  let setTheme = () => {
    let mainWrapper = document.querySelector('.app')
    let themeLabel = document.querySelector('.theme-label')

    if(mode === 'dark') {
      mainWrapper.classList.add('dark')
      themeLabel.innerText = 'Dark'
      localStorage.setItem('mode', 'dark')
    } else {
      mainWrapper.classList.remove('dark')
      themeLabel.innerText = 'Light'
      localStorage.setItem('mode', 'light')
    }
  }

  let checked = localStorage.getItem('mode') === 'dark' ? true : false

  return (
    <div className='theme-toggle'>
        <div><label className='theme-label'>Dark</label></div>
      <label className='switch'>
        <input type='checkbox' defaultChecked={checked} className='switch-input' onChange={(e) => {toggleTheme(e)}} />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default DarkModeToggle