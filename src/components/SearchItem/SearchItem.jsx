import React from 'react'

import { Hotel_3 } from '../../assets/images/index';

import './searchItem.css'

const searchItem = () => {
  return (
    <div className='searchItem'>
        <img src={Hotel_3} className='searchImg' alt="room_hotel" />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className='siFeatures'>
                Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>9.2</button>
            </div>
            <div className="siDetailsTexts">
                <span className='siPrice'>
                    $209
                </span>
                <span className='siTaxOp'>
                    Includes taxes and fees
                </span>
                <button>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default searchItem