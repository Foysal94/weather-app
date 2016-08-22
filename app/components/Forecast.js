import React, {PropTypes} from 'react'
import styles from  '../styles/components/Forecast.css'
import Helpers from '../Utilities/Helpers'


function Forecast(props) {
  return (
      <div>
        <h1 className={styles.locationHeader}>{props.location}</h1>
        <p className={styles.selectADayText}>Select a day </p>
        <ul className={styles.forecastList}>
          {
            props.fiveDayForecast.map( function(dayForecast, index) {
              //console.log(JSON.stringify(dayForecast,null, ' '))
              const weatherClass = Helpers.getWeatherIconClass(dayForecast.description)
              return(
                  <div id={index}
                       onClick={props.onDayClick.bind(this, dayForecast)}
                       className={styles.dayForecast} >
                    <li>
                      {<i className={weatherClass}></i>}
                      <h3>{dayForecast.date.format("dddd, MMMM Do")}</h3>
                    </li>
                  </div>
              )
            })
          }
        </ul>
      </div>
  )
}

Forecast.propTypes = {
  location: PropTypes.string.isRequired,
  fiveDayForecast: PropTypes.array.isRequired,
  onDayClick: PropTypes.func.isRequired
}

// rain
// clear
// clouds
// sunny

export default Forecast