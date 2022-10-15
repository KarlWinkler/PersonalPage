import React from 'react'
import '../styles/home.scss';
import '../styles/swipe_up_on_hover.scss';
import '../styles/magic_text.scss';

const Home = () => {

  let setIndex = (index) => {
    document.querySelector('.home-menu').dataset.index = index
    console.log('hover')
  }

  return (
    <div className='home-container'>
      <div className='home'>
        {/* <MagicText text='Welcome' /> */}
        <div className='home-menu'>
          <a className='home-menu-item swipe-up-on-hover' onMouseOver={() => {setIndex(1)}}>
            &gt;About
            <div className='swipe-up-background'></div>
          </a>
          <a className='home-menu-item swipe-up-on-hover' onMouseOver={() => {setIndex(2)}}>
            &gt;Projects
            <div className='swipe-up-background'></div>
          </a>

          <div className='home-menu-background' />
        </div>
        <div className='home-background' />
      </div>
      <div className='home-content'>
        <div className='home-word word-1 magic-text'>Innovate</div>
        <div className='home-word word-2'>Create</div>
        <div className='home-word word-3'>Lead</div>
      </div>
    </div>
  )
}

export default Home