import React, {PropTypes} from 'react'
import styles from  '../styles/components/Forecast.css'
import OpenWeatherHelpers from '../Utilities/OpenWeatherHelpers'
import Helpers from '../Utilities/Helpers'

function puke(object) {
  return <pre>{JSON.stringify(object,null, ' ')}</pre>
  //<div>DATA: {puke(props)}</div>
}

function convertDayNumberToString(dayNumber) {
  var day;
  switch(dayNumber)
  {
    case 0:
      day = "Sunday"
      break;

    case 1:
      day = "Monday"
      break;

    case 2:
      day = "Tuesday"
      break;

    case 3:
      day = "Wednesday"
      break;

    case 4:
      day = "Thursday"
      break;

    case 5:
      day = "Friday"
      break;

    case 6:
      day = "Saturday"
      break;

    case 7:
      day = "Sunday"
      break;

    default:
      day = "ERROR"
      break;
  }

  return day;
}



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
                  <div id={index} onClick={props.onDayClick.bind(this, dayForecast)} className={styles.dayForecast}>
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