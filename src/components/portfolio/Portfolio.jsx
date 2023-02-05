import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const Portfolio = () => {
  return (
    <section id='porftolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Web Application Product Inventory</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/NurMuhammadShufi" className='btn' target='_blank'>Github</a>
              <a href="https://aplikasi-inventaris.000webhostapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div> 
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>3D Motion Graphic Liquid</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/NurMuhammadShufi/" className='btn' target='_blank'>Github</a>
              <a href="https://drive.google.com/file/d/1UbGopOpUQmAgi22oeFsCDRoZHo21bhqb/view?usp=share_link" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Ultimate LinkTree</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/NurMuhammadShufi" className='btn' target='_blank'>Github</a>
              <a href="https://my-link-tree-mu.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio