import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/footer/Footer'

import useFetch from '../../hooks/useFetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";

import { SearchContext } from '../../context/SearchContext'

import './hotel.css'

const Hotel = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState();

    const { data, error, loading } = useFetch(`/hotels/find/${id}`);

    const { dates, options } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const handleOpen = (i) => {
        setSliderNumber(i);
        setOpen(true);
    }

    const handleMove = (direccion) => {
        let newSliderNumber;

        if (direccion)
            newSliderNumber = slideNumber === 0 ? 2 : slideNumber - 1;
        else {
            newSliderNumber = slideNumber === 2 ? 0 : slideNumber + 1;
        }

        setSliderNumber(newSliderNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? ("Loading...") : (
                <div className="hotelContainer">
                    {open && <div className='slider'>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setOpen(false)} />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove("l")} />
                        <div className="sliderWrapper">
                            <img src={data.photos[slideNumber]} alt="" className='sliderImg' />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")} />
                    </div>}
                    <div className="hotelWrapper">
                        <button className="bookNow">Reserve or Book Now!</button>
                        <h1 className="hotelTitle">{data.name}</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <div>
                            <span className='hotelDistance'>
                                Excellent Location - {data.distance}m from center
                            </span>
                        </div>
                        <span className='hotelPriceHighLight'>
                            Book a stay over ${data.cheapestPrice} at this property and get a free airpot taxi
                        </span>
                        <div className="hotelImages">
                            {data.photos?.map((photo, i) => (
                                <div className="hotelImgWrapper">
                                    <img
                                        onClick={() => handleOpen(i)}
                                        className='hotelImg'
                                        src={photo}
                                        alt="room_hotels" />
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className='hotelTitle'>{data.title}</h1>
                                <p className='hotelDesc'>
                                    {data.desc}
                                </p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a {days}-night stay!</h1>
                                <span>
                                    Located in the real heart of Krakow, this property has an
                                    excellent location score of 9.8
                                </span>
                                <h2>
                                    <b>${days * data.cheapestPrice * options.room}</b>({days}) nights
                                </h2>
                                <button>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>
            )}
        </div >
    )
}

export default Hotel