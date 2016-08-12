import React, {PropTypes} from 'react'

function puke(object) {
   return <pre>{JSON.stringify(object,null, ' ')}</pre>
}


function Forecast(props) {
   return (
       <div className='Forecast'>
          <h1>{props.Location}</h1>
          <div>DATA: {puke(props)}</div>
       </div>
   )
}

Forecast.PropTypes = {
   Location: PropTypes.string.isRequired
}

export default Forecast