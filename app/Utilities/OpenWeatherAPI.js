import axios from 'axios'

const apiKey = '2208d407ec5744e0b06648427dce293b'
const fiveDayAPICall = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5';
const currentWeather = ' http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY '

export function getFiveDayForecast(location){

}

export function getCurrentWeather(location) {
   return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&type=accurate&APPID=' + apiKey)
}

const helpers = {
   getFiveDayForecast: function(location) {
      return axios.get(
          'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=' + apiKey + '&cnt=5'
      )
      .then(function(response) {
          return response.data.list.map(function (DayForecast) {
             return [{
                "DateTime" : DayForecast.dt,
                "MinTemp" :DayForecast.main.temp_min,
                "MaxTemp" : DayForecast.main.temp_max,
                "Humidity" :DayForecast.main.humidity,
                "Description" : DayForecast.weather[0].main
             }]
          })
      })
   }

}