import React from 'react'
import rectangle from '../../Images/cards-rectangle.svg'
import img1 from '../../Images/cards-samarqand.png'

export default function ToursCards() {
  return (
    <div className='ToursCards'>
      <div className="container">
        <div className="row">
          <h2>Turlar</h2>
          <div className="col-md-4">
            <div className="card">
              <img src={img1} alt="" />
              <div className="card-body">
                <h3>Samarqand</h3>
                <div className='d-flex'>
                  <img src={rectangle} alt="" />Al Buxoriy ziyorotgoxi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
