import React, {Component} from 'react'
import Details from '../components/Details'

class DetailsContainer extends Component {

   constructor(props,context) {
      super(props, context)
   }

   render() {
      return(
          <Details/>
      )
   }
}

DetailsContainer.contextTypes = {
   history: React.PropTypes.object.isRequired,
   location: React.PropTypes.object.isRequired,
   router: React.PropTypes.object.isRequired
}

export default DetailsContainer