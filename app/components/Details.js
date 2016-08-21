import React, {PropTypes} from 'react'
import Helpers from '../Utilities/Helpers'

function puke(object) {
   return <pre>{JSON.stringify(object,null, ' ')}</pre>
   //<div>DATA: {puke(props)}</div>
}

function Details(props) {
   return (
      <div>
        <h1>Its working</h1>
        <ul>
          <li>{props.location}</li>
          <li>{props.minTemp}</li>
          <li>{props.maxTemp}</li>
          <li>{props.humidity}</li>
          <li>{props.description}</li>
        </ul>

      </div>

   )
}

Details.propTypes = {

  location: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired

  /*
  dayForecast: React.PropTypes.shape({

   })
   */
}

export default Details;