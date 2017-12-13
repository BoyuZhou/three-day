import axios from 'axios';

export function getWeather(location) {
    return axios.get('https://free-api.heweather.com/s6/weather/forecast', {
        params: {
            location: location,
            key: 'jingjing'
        }
    }).then((response) => {
        console.log(response)
        return response;
    })
}