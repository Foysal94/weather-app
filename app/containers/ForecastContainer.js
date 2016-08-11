import React, {Component} from 'react'
import Forecast from '../components/Forecast'

class ForecastContainer extends Component {

   constructor(props,context) {
      super(props, context)
      this.state =({
         days: [],
         location: this.props.routeParams.location

      })

      this.handleDaySelection = this.handleDaySelection.bind(this)

   }

   handleDaySelection() {

   }

   componentDidMount() {
   }

   render() {
      return(
          <Forecast Location = {this.state.location}/>
      )
   }
}


ForecastContainer.contextTypes = {
   history: React.PropTypes.object,
   location: React.PropTypes.object,
   router: React.PropTypes.object.isRequired
}

export default ForecastContainer