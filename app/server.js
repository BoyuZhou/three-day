import axios from 'axios';

const url = {
    weather: 'https://free-api.heweather.com/s6/weather/forecast',
    air: 'https://free-api.heweather.com/s6/air/now?parameters'
}

/**
 * 获取三天天气
 * @param location
 * @returns {Promise.<TResult>}
 */
export function getWeather(location) {
    return axios.get(url.weather, {
        params: {
            location: location,
            key: '85d2b5b6650043418b1e00ac4c375449'
        }
    }).then((response) => {
        console.log(response)
        return response;
    })
}

/**
 * 获取空气质量
 * @param location
 * @returns {Promise.<TResult>}
 */
export function getAirInfo (location) {
    return axios.get(url.air, {
        params: {
            location: location,
            key: '85d2b5b6650043418b1e00ac4c375449'
        }
    }).then((response) => {
        console.log(response)
        return response;
    })
}