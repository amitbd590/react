import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../HeroBg/Hero'
import HomeCard from '../HomeCard/HomeCard'
import Slider from '../Slider/Slider'
import './Home.css'

function Home(props) {
  return (
    <div className="primary-background">
      <Header></Header>
      <Slider></Slider>
      <HomeCard></HomeCard>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default Home
