const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=8aa3568c56414e4b9b481457231311';

export const fetchData = async (city) => {
    let data = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await data.json();
}

export const fetchDatFromLatLon = async (lat, long) => {
    let data = await fetch(`${baseUrl}&q=${lat},${long}&aqi=yes`)
    return await data.json();
}
