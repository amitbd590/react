import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeCardSingle from '../HomeCardSingle/HomeCardSingle'
import './HomeCard.css'

function HomeCard(props) {
  const url = 'products.JSON'
  const [homeCard, setHomeCard] = useState([])
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((homeCatdData) => setHomeCard(homeCatdData))
  }, [])
  const sliceData = homeCard.slice(1, 5)
  console.log(sliceData)
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h2 className='teacher-text'>All Our Subjects Together</h2>
          <Link className='btn-formate custom' to='/services'>View All</Link>
          <div className="home-card-data">
            
          {sliceData.map((data) => (
            <HomeCardSingle data={data} key={data.key}></HomeCardSingle>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
