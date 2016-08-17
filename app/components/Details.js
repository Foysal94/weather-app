import React, {PropTypes} from 'react'

function puke(object) {
   return <pre>{JSON.stringify(object,null, ' ')}</pre>
   //<div>DATA: {puke(props)}</div>
}

function Details(props) {
   return (
       <div>
          <h1>Its working</h1>
          {puke(props.dayForecast)}
       </div>

   )
}

Details.propTypes = {
   location: PropTypes.string.isRequired,
  /*
  dayForecast: React.PropTypes.shape({

   })
   */
}

export default Details;