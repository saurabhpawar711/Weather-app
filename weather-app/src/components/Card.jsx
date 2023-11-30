import React from 'react'
import { GrRefresh } from "react-icons/gr";
import OtherDetails from './OtherDetails'
import { useWeather } from '../weatherDetailsContext/weatherDetails';
import Search from './Search';

function Card() {
    const weather = useWeather();
    console.log(weather.city);
    return (
        <div className='flex justify-center align-middle'>
            <div className=' flex flex-col items-center justify-start w-[480px] h-[400px] rounded-3xl shadow-xl bg-slate-400 mt-6 p-2 relative'>
                <div className=' flex justify-center align-middle'>
                    <img src={weather.data?.current?.condition.icon} alt="weather" className=' w-32 h-32' />
                    <div className='absolute top-4 right-4'>
                        <button><GrRefresh size={30} /></button>
                    </div>
                </div>
                <h1 className=' text-6xl font-semibold'>{Math.round(weather.data?.current?.temp_c)}°C</h1>
                <h1 className=' text-2xl mt-5'>{weather.data?.location?.name}, {weather.data?.location?.country}</h1>
                <h1 className='mt-2 text-lg'>Feels like {Math.round(weather.data?.current?.feelslike_c)}°C</h1>
                <div className=' w-full h-full flex align-middle'>
                    <OtherDetails value={['humidity', 'Humidity']} />
                    <OtherDetails value={['uv', 'UV Index']} />
                    <OtherDetails value={['wind_kph', 'Wind (km/h)']} />
                </div>
            </div>
        </div>
    )
}

export default Card