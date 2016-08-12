import React, {Component} from 'react'
import Forecast from '../components/Forecast'
import Helpers from '../Utilities/OpenWeatherAPI';

class ForecastContainer extends Component {

   constructor(props,context) {
      super(props, context)
      this.state = ({
         days: [],
         location: this.props.routeParams.location

      })

      this.handleDaySelection = this.handleDaySelection.bind(this)

   }

   handleDaySelection() {

   }

   componentDidMount() {
      let location = this.state.location;
      Helpers.getFiveDayForecast(location)
          .then (function (weatherData) {
             //console.log("Resposne data: " + weatherData.data)
             console.log("Resposne status: " + weatherData.status)
             this.setState({
                data : weatherData
             })

          }.bind(this))

   }

   render() {
      return(
          <Forecast Location = {this.state.location}
                     data = {this.state.data} />
      )
   }
}


ForecastContainer.contextTypes = {
   history: React.PropTypes.object,
   location: React.PropTypes.object,
   router: React.PropTypes.object.isRequired
}

export default ForecastContainer