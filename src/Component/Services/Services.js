import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import Data_card from '../Data-card/Data_card'
import './Services.css'

function Services(props) {

  const url = 'products.JSON'
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dataBase) => setData(dataBase))
  }, [])

  const cardUrl= 'cardData.JSON'
  const[card, setCard]=useState([]);
  useEffect(()=>{
    fetch(cardUrl)
    .then(res=>res.json())
    .then(cardData=>setCard(cardData))
  },[])

  return (
    <div className="bg-primary-main">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="card-data">
              {data.map((data) => (
                <Card data={data} key={data.key}></Card>
              ))}
            </div>
          </div>
          <div className="col-md-2 part-2">
            <h2 className="vision">Our vision</h2>
            {
              card.map(cardData=> <Data_card cardData= {cardData} key={card.key}></Data_card>)
            }
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
