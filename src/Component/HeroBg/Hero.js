import React from 'react';
import './Hero.css'
import img from './img/about1.png'
function Hero(props) {
    return (
        <div className='heroBg'>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <img className='img-fluid' src={img} alt="" />
                  </div>
                  <div className="col-md-6">
                      <h2 className='text-light'>FAILURE IS THE CONDIMENT THAT GIVES <span className='text-warning'>SUCCESS</span></h2>
                      <p className='mb-5'>Here is the opportunity to build-up your website. Graphical components, structural advices, plans and many more. Check out our services and make your company outstanding.</p>
                      <a href="#" className='btn-formate'>See More</a>
                  </div>
              </div>
              <div className="row my-5 py-5">
                  <div className="col-md-3">
                      <div className="wrap">
                          <p>2011 - 2014 (UI DESIGNER)</p>
                          <h2>GOOGLE CORPORATION</h2>
                          <p className='text-light'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="wrap">
                          <p>2011 - 2014 (UI DESIGNER)</p>
                          <h2>APPLE PRODUCT CO.</h2>
                          <p className='text-light'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="wrap">
                          <p>2011 - 2014 (UI DESIGNER)</p>
                          <h2>LEAD DESIGNER MUSICSOFT</h2>
                          <p className='text-light'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="wrap">
                          <p>2011 - 2014 (UI DESIGNER)</p>
                          <h2>LBRUNO MARS AS.</h2>
                          <p className='text-light'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                      </div>
                  </div>
              </div>
          </div>


          
        </div>
    );
}

export default Hero;