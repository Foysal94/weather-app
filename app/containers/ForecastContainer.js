import React, {Component} from 'react'
import Forecast from '../components/Forecast'
import Helpers from '../Utilities/OpenWeatherAPI';

class ForecastContainer extends Component {

   constructor(props,context) {
      super(props, context)
      this.state = ({
         fiveDayForecast: [],
         location: this.props.routeParams.location

      })

      this.handleDaySelection = this.handleDaySelection.bind(this)

   }

   handleDaySelection() {

   }

   componentDidMount() {
      let location = this.state.location;
      Helpers.getFiveDayForecast(location)
          .then(function (weatherData) {
             //console.log("Resposne data: " + weatherData.data)
             console.log("Resposne status: " + weatherData.status)

             this.setState({
                fiveDayForecast : weatherData
             })
             var obj = this.state.fiveDayForecast
             console.log("Type:" + typeof obj)
             console.log(obj[1])
          }.bind(this))

   }

   render() {
      return(
          <Forecast  location = {this.state.location}
                     fiveDayForecast={this.state.fiveDayForecast} />
      )
   }
}


ForecastContainer.contextTypes = {
   history: React.PropTypes.object.isRequired,
   location: React.PropTypes.object.isRequired,
   router: React.PropTypes.object.isRequired
}

export default ForecastContainer