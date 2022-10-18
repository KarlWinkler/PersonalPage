import React from 'react'
import '../styles/about.scss'

const About = () => {
  let focusContent = (e) => {
    let index = parseInt(e.target.dataset.value)
    let focus = document.querySelector(`.about-content.content-${index}`)
    let right = document.querySelector(`.about-content.content-${(index + 4) % 3}`) 
    let left = document.querySelector(`.about-content.content-${(index + 2) % 3}`) 

    let siblings = e.target.parentNode.childNodes
    siblings.forEach((element) => { element.classList.remove('focus') })

    e.target.classList.add('focus')

    focus.classList.add('focus')
    focus.classList.remove('right')
    focus.classList.remove('left')

    right.classList.add('right')
    right.classList.remove('focus')
    right.classList.remove('left')

    left.classList.add('left')
    left.classList.remove('right')
    left.classList.remove('focus')
  }

  return (
    <div className="about-wrapper">
      <div className='about-select flex-container'>
        <div className='about-selector-bar' data-selected='0'>
          <div className='about-selector-item focus' data-value='0' onClick={(e) => {focusContent(e)}}>Story</div>
          <div className='about-selector-item' data-value='1' onClick={(e) => {focusContent(e)}}>Skills</div>
          <div className='about-selector-item' data-value='2' onClick={(e) => {focusContent(e)}}>Hobbies</div>
        </div>
        <div className='about-content-container'>
          <div className='about-content story content-0 focus'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sapien ut sem auctor, sed ullamcorper massa consectetur. Suspendisse lacinia eros ornare, tincidunt ipsum at, mollis risus. Integer eleifend arcu enim, in pellentesque orci semper ut. Fusce condimentum ante ut leo imperdiet, sed mattis ipsum ullamcorper. Quisque nibh justo, scelerisque vel nulla ut, ullamcorper imperdiet metus. Ut ultrices orci in nisl bibendum aliquet. Nunc ante ex, hendrerit ut lectus id, laoreet tempor metus. Etiam eu nibh mi. Curabitur laoreet risus metus, ut egestas risus tincidunt volutpat. Donec consequat dignissim purus, et feugiat lectus. Maecenas imperdiet tristique nibh sed malesuada. Phasellus tempus nulla molestie dui porttitor, sed dapibus est egestas. Suspendisse potenti.
            Mauris vulputate id libero luctus ultricies. Curabitur eleifend dolor a pretium aliquam. Nam nec neque eget ex convallis malesuada vel vel orci. Curabitur elit odio, iaculis a sodales a, posuere eget erat. In hac habitasse platea dictumst. Nunc ac aliquet arcu. Nulla ullamcorper ut enim varius commodo. Nam ultrices, metus nec commodo dignissim, libero nibh pretium arcu, vel congue dui eros sit amet augue. Ut gravida rhoncus mi, in pretium lacus fringilla at. Sed blandit placerat metus vel venenatis. Donec eget placerat lorem. Curabitur sit amet mi ut dolor elementum molestie. Phasellus tristique cursus convallis. Duis a consequat odio. Fusce diam ante, lacinia eget iaculis vel, euismod eu purus. Phasellus eleifend purus in lorem euismod, quis fringilla dui gravida.
          </div>
          <div className='about-content skills   content-1 right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sapien ut sem auctor, sed ullamcorper massa consectetur. Suspendisse lacinia eros ornare, tincidunt ipsum at, mollis risus. Integer eleifend arcu enim, in pellentesque orci semper ut. Fusce condimentum ante ut leo imperdiet, sed mattis ipsum ullamcorper. Quisque nibh justo, scelerisque vel nulla ut, ullamcorper imperdiet metus. Ut ultrices orci in nisl bibendum aliquet. Nunc ante ex, hendrerit ut lectus id, laoreet tempor metus. Etiam eu nibh mi. Curabitur laoreet risus metus, ut egestas risus tincidunt volutpat. Donec consequat dignissim purus, et feugiat lectus. Maecenas imperdiet tristique nibh sed malesuada. Phasellus tempus nulla molestie dui porttitor, sed dapibus est egestas. Suspendisse potenti.
            Mauris vulputate id libero luctus ultricies. Curabitur eleifend dolor a pretium aliquam. Nam nec neque eget ex convallis malesuada vel vel orci. Curabitur elit odio, iaculis a sodales a, posuere eget erat. In hac habitasse platea dictumst. Nunc ac aliquet arcu. Nulla ullamcorper ut enim varius commodo. Nam ultrices, metus nec commodo dignissim, libero nibh pretium arcu, vel congue dui eros sit amet augue. Ut gravida rhoncus mi, in pretium lacus fringilla at. Sed blandit placerat metus vel venenatis. Donec eget placerat lorem. Curabitur sit amet mi ut dolor elementum molestie. Phasellus tristique cursus convallis. Duis a consequat odio. Fusce diam ante, lacinia eget iaculis vel, euismod eu purus. Phasellus eleifend purus in lorem euismod, quis fringilla dui gravida.
          </div>
          <div className='about-content hobbies  content-2 left '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sapien ut sem auctor, sed ullamcorper massa consectetur. Suspendisse lacinia eros ornare, tincidunt ipsum at, mollis risus. Integer eleifend arcu enim, in pellentesque orci semper ut. Fusce condimentum ante ut leo imperdiet, sed mattis ipsum ullamcorper. Quisque nibh justo, scelerisque vel nulla ut, ullamcorper imperdiet metus. Ut ultrices orci in nisl bibendum aliquet. Nunc ante ex, hendrerit ut lectus id, laoreet tempor metus. Etiam eu nibh mi. Curabitur laoreet risus metus, ut egestas risus tincidunt volutpat. Donec consequat dignissim purus, et feugiat lectus. Maecenas imperdiet tristique nibh sed malesuada. Phasellus tempus nulla molestie dui porttitor, sed dapibus est egestas. Suspendisse potenti.
            Mauris vulputate id libero luctus ultricies. Curabitur eleifend dolor a pretium aliquam. Nam nec neque eget ex convallis malesuada vel vel orci. Curabitur elit odio, iaculis a sodales a, posuere eget erat. In hac habitasse platea dictumst. Nunc ac aliquet arcu. Nulla ullamcorper ut enim varius commodo. Nam ultrices, metus nec commodo dignissim, libero nibh pretium arcu, vel congue dui eros sit amet augue. Ut gravida rhoncus mi, in pretium lacus fringilla at. Sed blandit placerat metus vel venenatis. Donec eget placerat lorem. Curabitur sit amet mi ut dolor elementum molestie. Phasellus tristique cursus convallis. Duis a consequat odio. Fusce diam ante, lacinia eget iaculis vel, euismod eu purus. Phasellus eleifend purus in lorem euismod, quis fringilla dui gravida.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About