import { createContext, useContext, useState } from 'react'
import { fetchData, fetchDatFromLatLon } from '../api';

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState(null);

    const fetchDataOfCity = async () => {
        const data = await fetchData(city);
        setData(data);
    }

    const fetchDataLatLong = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const data = await fetchDatFromLatLon(lat, long);
            setData(data);
            setCity(data?.location.name);
        });
    }

    return (<WeatherContext.Provider
        value={{ data, city, fetchDataOfCity, setCity, fetchDataLatLong, setData }}>
        {props.children}
    </WeatherContext.Provider>)
}