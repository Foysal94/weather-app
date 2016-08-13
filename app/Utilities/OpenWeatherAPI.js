import axios from 'axios'

const apiKey = '2208d407ec5744e0b06648427dce293b'
const fiveDayAPICall = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5';
const currentWeather = ' http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY '

export function getFiveDayForecast(location){

}

export function getCurrentWeather(location) {
   return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&type=accurate&APPID=' + apiKey)
}

const Helpers = {
   getFiveDayForecast: function(location) {
      return axios.get(
          'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=' + apiKey + '&cnt=5'
      )
      .then(function(response) {
          return response.data.list.map(function(dayForecast) {
           //  console.log( JSON.stringify(dayForecast,null, ' '))
             return {
                "MinTemp" : dayForecast.temp.min,
                "MaxTemp" : dayForecast.temp.max,
                "Humidity" : dayForecast.humidity,
                "Description" : dayForecast.weather[0].main
             }
          })
      })
   }

}

export default Helpers