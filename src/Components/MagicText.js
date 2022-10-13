import React from 'react'
import '../styles/magic_text.scss';
import '../styles/swipe_up_on_hover.scss';

const MagicText = ({ text }) => {
  return (
    <span className='swipe-up-on-hover'>
      <span className='magic-text'>{text}</span>
    </span>
  )
}

export default MagicText