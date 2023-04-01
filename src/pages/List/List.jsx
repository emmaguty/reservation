import React, { useState } from 'react'

import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import SearchItem from '../../components/SearchItem/SearchItem'
import useFetch from '../../hooks/useFetch';

import { format } from 'date-fns';

import './list.css';

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);


  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);

  const handleClick = () => {
    reFetch()
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && <DateRange
                onChange={item => setDates([item.seletion])}
                minDate={new Date()}
                ranges={dates}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className='lsOptions'>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input onChange={e => setMin(e.target.value)} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small> per night</small>
                  </span>
                  <input onChange={e => setMax(e.target.value)} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input min={1} type="number" className="lsOptionInput"
                    placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input min={0} type="number" className="lsOptionInput"
                    placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input min={1} type="number" className="lsOptionInput"
                    placeholder={options.room} />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="listResult">
            {loading ? "Loading..." : <>
              {data.map(item => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List