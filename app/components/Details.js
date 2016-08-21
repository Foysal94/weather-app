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
        <ul className={styles.list}>
          <i className={weatherClass}></i>

          {propsHTML(props.date)}
          {propsHTML(props.location)}
          {propsHTML(props.description)}
          {propsHTML(props.minTemp)}
          {propsHTML(props.maxTemp)}
          {propsHTML(props.humidity)}

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