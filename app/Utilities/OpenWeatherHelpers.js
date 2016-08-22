import axios from 'axios'
import moment from 'moment'
const apiKey = '2208d407ec5744e0b06648427dce293b'

const OpenWeatherHelpers = {

   getFiveDayForecast: function(location) {)

      return axios.get(
          'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=' + apiKey + '&cnt=5'
      )

      .then(function(response) {

          return response.data.list.map(function(dayForecast) {

            var day = moment.unix(dayForecast.dt)

            return {
               "unixTimeStamp" : dayForecast.dt,
               "date" : day,
               "minTemp" : dayForecast.temp.min,
               "maxTemp" : dayForecast.temp.max,
               "humidity" : dayForecast.humidity,
               "description" : dayForecast.weather[0].main
             }

          })

      })
   }



}

export default OpenWeatherHelpers