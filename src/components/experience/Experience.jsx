import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Skills</h2>

       {/* FRONT END DEV  */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>Tailwind CSS</h4>
                    <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>React</h4>
                    <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
        {/* END FRONT END DEV  */}

        {/* BACK END DEV  */}
        <div className="experience__backend">
          <h3>Back Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>MySQL</h4>
                    <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>PHP</h4>
                    <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>Python</h4>
                    <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>CodeIgniter</h4>
                    <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                    <h4>C++</h4>
                    <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
          </div>
          {/* END BACK END DEV  */}

      </div>
    </section>
  )
}

export default Experience