import React from 'react'

// import { Hotel_1, Hotel_2, Hotel_3 } from '../../assets/images/index'
import { Hotel_1, Hotel_2, Hotel_3 } from '../../assets/images/index'

import './featuredProperties.css';

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src={Hotel_1} alt="hotel_room" />
                <span className="fpName">Aparthotel Stare Miastro</span>
                <span className="fpCity">Los Angeles, USA</span>
                <span className="fpPrice">Starting from $299</span>
                <div className="fpRating">
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={Hotel_2} alt="hotel_room" />
                <span className="fpCity">Acapulco, México</span>
                <span className="fpPrice">Starting from $209</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={Hotel_3} alt="hotel_room" />
                <span className="fpCity">Ciudad de México, México</span>
                <span className="fpPrice">Starting from $199</span>
                <div className="fpRating">
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties