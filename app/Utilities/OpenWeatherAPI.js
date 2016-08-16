import axios from 'axios'
import moment from 'moment'

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
      var currentDate = new Date()

      return axios.get(
          'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=' + apiKey + '&cnt=5'
      )

      .then(function(response) {
        //console.log( JSON.stringify(response.data,null, ' '))
          return response.data.list.map(function(dayForecast, index) {

             var day = moment.unix(dayForecast.dt)
             console.log("Day: " + day.format("dddd, MMMM Do"))

             return {
               "Date" : day,
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