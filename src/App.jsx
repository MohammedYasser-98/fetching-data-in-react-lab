//import './App.css'
import { useState, useEffect } from 'react'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import * as starshipService from './services/starshipService'
const App = () => {

const [Starships, setStarship] = useState([])
const [search, setSearch] = useState('')

useEffect(()=>{
  const fetchData = async () =>{
    
    const data = await starshipService.index()
    setStarship(data.results)

  }
  fetchData()
}, [])
//--------------
const handleSearch = (formData) => {
  setSearch(formData)
}
  return (
    <> 
    <h1>Star Wars API</h1>
<StarshipSearch handleSearch={handleSearch}/>
<StarshipList Starships={Starships} search={search}/>
    </>
  )
}

export default App