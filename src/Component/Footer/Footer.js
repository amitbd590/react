import React from 'react'
import './Footer.css'
import logo from './img/LOGO-300x129.png'

function Footer(props) {
  return (
    <div className="bg-darkful">
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="logo">
              <h3 className="headingText">OUR MISSION</h3>
            </div>
            <div className="all-link">
              <ul>
                <li>Web Development.</li>
                <li>Software development.</li>
                <li>Affiliate Marketing.</li>
                <li>New Product Review.</li>
                <li>Email Marketing.</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="logo">
              <h3 className="headingText">USER LINKS</h3>
            </div>
            <div className="all-link">
              <ul>
                <li>Web Development.</li>
                <li>Software development.</li>
                <li>Affiliate Marketing.</li>
                <li>New Product Review.</li>
                <li>Email Marketing.</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="logo">
              <h3 className="headingText">Follow US</h3>
            </div>
            <div className="all-link">
             <span><i class="fab fa-facebook-square"></i></span>
             <span><i class="fab fa-twitter-square"></i></span>
             <span><i class="fab fa-linkedin"></i></span>
             <span><i class="fab fa-youtube"></i></span>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
