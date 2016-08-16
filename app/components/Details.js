import React, {PropTypes} from 'react'


function Details(props) {
   return (
       <div>
          <h1>Its working</h1>

       </div>

   )
}

Details.propTypes = {
   location: PropTypes.string.isRequired,
}

export default Details;