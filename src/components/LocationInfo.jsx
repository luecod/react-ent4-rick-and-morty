import React from 'react'
import './styles/lotacioninfo.css'

const LocationInfo = ({ location }) => {

  return (
    <article>
      <ul className='location-container'>
        <li className='location__name-container'>
          <span className='location__name-label'>Name: </span>
          <span className='location__name'>{location?.name}</span>
        </li>
        <li className='location__type-container'>
          <span className='location__type-label'>Type: </span>
          <span className='location__type'>{location?.type}</span>
        </li>
        <li className='location__dimension-container'>
          <span className='location__dimension-label'>Dimension: </span>
          <span className='location__dimension'>{location?.dimension}</span>
        </li>
        <li className='location__population-container'>
          <span className='location__population-label'>Population: </span>
          <span className='location__population'>{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  )
}

export default LocationInfo