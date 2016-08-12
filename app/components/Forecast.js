import React, {PropTypes} from 'react'




function Forecast(props) {
   return (
       <div className='Forecast'>
          <h1>{props.Location}</h1>

       </div>
   )
}

Forecast.PropTypes = {
   Location: PropTypes.string.isRequired
}

export default Forecast