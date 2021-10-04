import React from 'react'
import './About.css'
import img from './img/right-img.jpg'

function About(props) {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="wrap-body">
              <h3>WHY CHOOSE US</h3>
              <h2>25+ Years of Experience in Human Resource <span className='text-warning'>Management</span></h2>
              <p>
                Reobiz donec pulvinar magna id leoersi pellentesque impered
                dignissim rhoncus euismod euismod eros vitae.
              </p>
              <div className='d-flex mt-5'>
                <div>
                  <h3 className='text-muted'>Extensive Employment</h3>
                  <p>
                    Quisque placerat vitae lacus ut sceleris queusce luctus odio
                    ac nibh luctus, in porttitor.
                  </p>
                </div>
                <div>
                  <h3 className='text-muted'>Working Placeholdered</h3>
                  <p>
                    Quisque placerat vitae lacus ut sceleris queusce luctus odio
                    ac nibh luctus, in porttitor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
              <div className="img">
                  <img className='img-fluid' src={img} alt="" />
              </div> 
          </div>
        </div>
        <div className="row">
            <div className="col-md">
                <div className="wrap-3 text-center">
                    <h2>WHAT WE DO</h2>
                    <h1>View Reobiz HR Solutions <span className='text-warning'>Best Services</span></h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
