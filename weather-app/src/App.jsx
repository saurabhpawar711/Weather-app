import './App.css'
import Card from './components/Card'
import Search from './components/Search'
import { useEffect } from 'react'
import { useWeather } from './weatherDetailsContext/weatherDetails'

function App() {

  const weather = useWeather();

  useEffect(() => {
    return weather.fetchDataLatLong;
  }, [])

  return (
    <>
      <Search />
      <Card />
    </>
  )
}

export default App
