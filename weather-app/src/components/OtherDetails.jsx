import React from 'react'
import { useWeather } from '../weatherDetailsContext/weatherDetails';

function OtherDetails(props) {
    const weather = useWeather();
    return (
        <div className=' bg-slate-100 w-full m-1 flex flex-col justify-center items-center rounded-3xl mt-3'>
            <h3 className=' font-semibold'>{props.value[1]}</h3>
            <h4>{weather.data?.current[props.value[0]]}</h4>
        </div>
    )

}
export default OtherDetails;