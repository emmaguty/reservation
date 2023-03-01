import React from 'react'

import { NewYork, Cancun, Madrid } from '../../assets/images/index';

import './featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src={NewYork} alt="new_york_city" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>New York, USA</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Cancun} alt="new_york_city" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Cancun, México</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Madrid} alt="new_york_city" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Madrid, España</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured