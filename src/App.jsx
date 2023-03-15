import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import Error from './components/Error'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  //Guarda una location
  const [location, setLocation] = useState()
  //Guarda informacion del input y hace peticion cunado se hace submit
  const [searchInput, setSearchInput] = useState('')
  //Guarda las sugerencias de la API
  const [suggedtedList, setSuggedtedList] = useState()
  //Indica si hay error 
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault() //Solo se usa en el submit
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = e => {
    if (e.target.value === '') {
      setSuggedtedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
      axios.get(URL)
        .then(res => setSuggedtedList(res.data.results))
        .catch(err => console.log(err))
    }
  }



  return (
    <div className="App">
      <div className='App__header-container'>
        <img className='App__header-principal' src="/App/image 3.png" alt="" />
        <img className='App__header-name' src="/App/image 2.png" alt="" />
        <form className='App__header-form' onSubmit={handleSubmit}>
          <input
            className='App__header-input'
            id='idLocation'
            placeholder='Enter another numer from 1 to 126'
            type="text"
            onChange={handleChange}
          />
          {/* <button className='App__header-btn'>Search</button> */}
          <FilterList
            suggedtedList={suggedtedList}
            setSearchInput={setSearchInput}
          />
        </form>
      </div>
      {
        hasError ?
          <Error />
          :
          <>
            <LocationInfo
              location={location}
            />
            <div className='card-container'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
