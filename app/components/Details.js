import React, {PropTypes} from 'react'
import Helpers from '../Utilities/Helpers'
import styles from '../styles/components/Details.css'

function puke(object) {
  return <pre>{JSON.stringify(object,null, ' ')}</pre>
  //<div>DATA: {puke(props)}</div>
}

function propsHTML(item) {
  return (
      <li>
        <h2>{item}</h2>
      </li>
  )
}

function Details(props) {
  const weatherClass = Helpers.getWeatherIconClass(props.description)
  return (
      <div className={styles.dayForecast}>
        <div className={styles.dayDate}>
          <i className={weatherClass}></i>
          <h3>{props.date}</h3>
        </div>
        <ul className={styles.list}>

          <li>
            <p>{props.location}</p>
          </li>

          <li>
            <p>{props.description}</p>
          </li>

          <li>
            <p>
              <span>min temp: </span>
              {props.minTemp}
            </p>
          </li>

          <li>
            <p>
              <span>max temp: </span>
              {props.maxTemp}
            </p>
          </li>

          <li>
            <p>
              <span>humidity: </span>
              {props.humidity}
            </p>
          </li>


        </ul>
      </div>
  )
}

Details.propTypes = {

  location: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
  /*
   dayForecast: React.PropTypes.shape({

   })
   */
}

export default Details;