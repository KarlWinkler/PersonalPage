import React from 'react'
import '../styles/name.scss';
import '../styles/background-swipe.scss';

const Name = ({ name }) => {
  let toggleInfo = () => {
    document.querySelector('.name-info').classList.toggle('show')
  }

  return (
    <div className='name'>
      <span className='name-text background-swipe' onClick={() => {toggleInfo()}}>{name}</span>
      <div className='name-info' onClick={() => {toggleInfo()}}>
        <div>
          <p>Software Engineer</p>
          <p>University of Calgary</p>
        </div>        
      </div>
    </div>
  )
}

export default Name