import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
              <p>Create interesting and different designs with trending apps.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Create a Responsive view to improve User Experience.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Rapid visual prototyping, to create an unforgettable experience.</p>
            </li>   
            <li><BiCheck className='service__list-icon' />
              <p>Add value and create personalized experiences with user research.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Deliver the best experiences with human-centered usability testing.</p>
            </li>     
          </ul>
        </article>
          {/* END UI/UX Design */}

          {/* WEB DEVELOPMENT */}
          <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
              <p>Create Mobile Responsive Displays to improve UX.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Improve User Experince Consulting & Design Services.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Build personal eCommerce Web Application Services.</p>
            </li>   
            <li><BiCheck className='service__list-icon' />
              <p>HTML5 Web Application Development.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Search Engine Optimization & 24x7 Support & Maintenance.</p>
            </li>     
          </ul>
          </article>
          {/* END WEB DEVELOPMENT */}

          {/* Video Editor */}
          <article className="service">
          <div className="service__head">
            <h3>Video Editor</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
              <p>Create Elegant Company Profile or Events Video.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Video Editing Projects that can be used by Clients.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Provide additional Resources for Free to Customization.</p>
            </li>   
            <li><BiCheck className='service__list-icon' />
              <p>Alignment of Color Grading and Audio Mixing.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>The video results have many options, from 1080P to 4K.</p>
            </li>     
          </ul>
          </article>
          {/* END Video Editor */}

 
      </div>

    </section>
  )
}

export default Services