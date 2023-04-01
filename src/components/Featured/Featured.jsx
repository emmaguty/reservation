import { NewYork, Cancun, Madrid } from '../../assets/images/index';

import useFetch from '../../hooks/useFetch';

import './featured.css';

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Medallon%Madrid%London")

    return (
        <div className='featured'>
            {loading ? (
                "Loading please wait" 
                ) : (
                <><div className="featuredItem">
                <img src={NewYork} alt="new_york_city" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>New York, USA</h1>
                    <h2>{data[0]} Properties</h2>
                </div>
            </div>
                <div className="featuredItem">
                    <img src={Cancun} alt="new_york_city" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Cancun, México</h1>
                        <h2>{data[1]} Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={Madrid} alt="new_york_city" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Madrid, España</h1>
                        <h2>{data[2]} Properties</h2>
                    </div>
                </div></>)}
        </div>
    )
}

export default Featured