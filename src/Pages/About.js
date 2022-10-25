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
            <p>
              I am a full stack web developer striving to lean about how everything works behind the scenes. 
              I grew up surounded by environmental ideas being contrasted with brutaly coroporate city of Calgary.
              This motivates me to get up and work for a better future, and learn as much as I can so that I can
              innnovate and create solutions. Finding a passion in programming and a valuable education at the
              University of Calgary has given me a good foundation that I have been able to build on and now I 
              have started the journy to become an expert in my field.  
            </p>
          </div>
          <div className='about-content skills   content-1 right'>
            <p>
              I am more or less an expert generalist, because I can't stop myself from trying to stick
              my fingers into every part of every project I start. This breadth of skills that I have been able
              to gather has helped me become a great problem solver and fast learner becasue I force myself
              to learn so much. Now that I have forced myself to focus on only one thing, I have found that
              even as a software developer I still try to learn about every aspect, whether it's the planning and
              product side or the design and UX, I want to know it all. Recently I have been pushed towards learning
              more about different tech stacks I have been blown away with all of the new and exciting things I get 
              to learn.
            </p>  
          </div>
          <div className='about-content hobbies  content-2 left '>
            <p>
              With my free time I like to talk with friends and learn new things, even if they aren't very
              closely related to things I am good at. I dabble in art and writing, but I am not very good at
              either of them. I also play video games and follow sports leagues when I don't feel like doing
              much.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About