import useFetch from '../../hooks/useFetch';

import { Hotel_1, Hotel_2, Hotel_3 } from '../../assets/images/index'

import './featuredProperties.css';

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");


    return (
        <div className='fp'>
            {loading ? "Loading..." :  <>
            {data.map(item=>(
            <div className="fpItem" key={item._id}>
                <img 
                src={item.photos[0]} 
                alt="hotel_room" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from {item.cheapestPrice}</span>
                {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div>))}
            </>}
        </div>
    )
}

export default FeaturedProperties