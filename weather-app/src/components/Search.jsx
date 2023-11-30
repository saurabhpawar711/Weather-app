
import { useWeather } from '../weatherDetailsContext/weatherDetails'

function Search() {
    const weather = useWeather();
    return (
        <div className='flex justify-center align-middle mt-11'>
            <form onSubmit={(e) => {
                e.preventDefault();
                weather.fetchDataOfCity
            }}>
                <input type="text"
                    placeholder='Search for city'
                    className=' shadow-lg rounded-3xl p-3 w-96'
                    value={weather.city}
                    onChange={(e) => weather.setCity(e.target.value)}
                />
                <button
                    className='p-3 ml-3 bg-blue-500 rounded-2xl shadow-lg'
                    onClick={(weather.city) ? weather.fetchDataOfCity : weather.fetchDataLatLong}
                >Search</button>
            </form >
        </div >
    )
}

export default Search;