import React, {PropTypes} from 'react'

function puke(object) {
   return <pre>{JSON.stringify(object,null, ' ')}</pre>
   //<div>DATA: {puke(props)}</div>
}


function Forecast(props) {
   return (
       <div className='Forecast'>
          <h1>{props.location}</h1>
          {console.log("props.fiveDayForecast: "  + props.fiveDayForecast)}
          <ul>
             {
                props.fiveDayForecast.map( function(dayForecast) {
                  return(
                      <li>
                         <pre>{JSON.stringify(dayForecast,null, ' ')}</pre>
                      </li>
                  )
               })
             }
          </ul>
       </div>
   )
}

Forecast.propTypes = {
   location: PropTypes.string.isRequired,
   fiveDayForecast: PropTypes.array
}

export default Forecast