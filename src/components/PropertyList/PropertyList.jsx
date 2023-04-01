import useFetch from '../../hooks/useFetch';
import {Mty, Miami, Dubai, Cancun, Madrid} from '../../assets/images/index';

import './propertyList.css';

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");
    console.log(data)

    const images = [
        Mty,
        Miami,
        Dubai,
        Cancun,
        Madrid
    ]

  return (
    <div className='pList'>
        { loading ? (
            "loading..."
            ) : ( 
            <>
            {data && 
                images.map((img,i) => (
            <div className="pListItem" key={i}>
                <img src={img} 
                alt="" 
                className='pListImg' 
                />
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
            </div>
            ))}
            </>
            )}
        
    </div>
  )
}

export default PropertyList