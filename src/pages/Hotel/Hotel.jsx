import React, { useState } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'

import MailList from '../../components/MailList/MailList'
import Footer from '../../components/footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark
} from "@fortawesome/free-solid-svg-icons";


import './hotel.css'

const Hotel = () => {

    const [slideNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState();

    const photos = [
        {
            src: 'https://unikonfort.com.mx/wp-content/uploads/2019/02/diez-cosas-indispensables-que-debe-tener-tu-cuarto-de-hotel.jpg'
        },
        {
            src: 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg'
        },
        {
            src: 'https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/Habitaci%C3%B3n-suite-catalonia.jpg'
        },
    ];

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
            <div className="hotelContainer">
                {open && <div className='slider'>
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className='sliderImg' />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Gran Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 NYC</span>
                    </div>
                    <span className='hotelPriceHighLight'>
                        Book a stay over $114 at this property and get a free airpot taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img
                                    onClick={() => handleOpen(i)}
                                    className='hotelImg'
                                    src={photo.src}
                                    alt="room_hotels" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
                            <p className='hotelDesc'>
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accomodations with air conditioning and
                                free Wi-Fi. The units come with hardwood floors and feature a
                                fully equiped kitchenette with a microware, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Krakow-Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel