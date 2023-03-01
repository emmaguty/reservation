import React from 'react'

import {Mty, Miami, Dubai, Cancun, Madrid, NewYork} from '../../assets/images/index';

import './propertyList.css';

const propertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={Mty} alt="monterrey_arena" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Miami} alt="monterrey_arena" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Dubai} alt="monterrey_arena" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Cancun} alt="monterrey_arena" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Madrid} alt="monterrey_arena" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={NewYork} alt="monterrey_arena" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList