/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Slider.css'
import img_1 from './img/1.jpg'

function Slider(props) {
  return (
    <div className='slider'>
      <div class="bd-example">
          <div className="text container">
              <h2>NENO Programming  <span className='text-warning'>School</span> </h2>
              <p className='pb-3'>In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam eget eros ac enim iaculis sagittis. Maecenas eget sapien purus. </p>
              <a href="#" className='btn-formate'>See More</a>
          </div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div className="div-width"></div>
              <div class="carousel-caption d-none d-md-block">
                <h3>Innovative future of digital world</h3>
                <p>
                A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software. The term programmer is sometimes used as a synonym, but may also lack connotations of engineering education or skills.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="div-width"></div>
              <div class="carousel-caption d-none d-md-block">
                <h3>The best Developer company</h3>
                <p>Software engineering is the application of engineering concepts to software development. Its main goal is the creation, improvement, and maintenance of software.</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Slider
