import React from 'react'
import MagicText from '../Components/MagicText'
import '../styles/home.scss';
import '../styles/swipe_up_on_hover.scss';

const Home = () => {

  let setIndex = (index) => {
    document.querySelector('.home-menu').dataset.index = index
    console.log('hover')
  }

  return (
    <div className='home'>
      {/* <MagicText text='Welcome' /> */}
      <div className='home-menu'>
        <a className='home-menu-item swipe-up-on-hover' onMouseOver={() => {setIndex(1)}}>About</a>
        <a className='home-menu-item swipe-up-on-hover' onMouseOver={() => {setIndex(2)}}>Projects</a>
        <div className='home-menu-background' />
      </div>
      <div className='home-background' />
    </div>
  )
}

export default Home