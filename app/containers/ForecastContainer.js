import React, {Component} from 'react'
import Forecast from '../components/Forecast'
import Helpers from '../Utilities/OpenWeatherAPI';
import Details from '../components/Details';

class ForecastContainer extends Component {

   constructor(props,context) {
      super(props, context)
      this.state = ({
         fiveDayForecast: [],
         location: this.props.params.location

      })

      this.handleDayClick = this.handleDayClick.bind(this)

   }

   handleDayClick(dayForecast) {
      console.log(JSON.stringify(dayForecast,null, ' '))
      

   }

   componentDidMount() {
      let location = this.state.location;
      Helpers.getFiveDayForecast(location)
          .then(function (weatherData) {
             this.setState({
                fiveDayForecast : weatherData
             })

          }.bind(this))

   }

   render() {
      if(this.props.location.pathname.includes('details')){
         return (
             <Details location = {this.state.location}/>
         )
      }

      else {
         return(
             <Forecast  location = {this.state.location}
                        fiveDayForecast={this.state.fiveDayForecast}
                        onDayClick={this.handleDayClick}/>
         )
      }

   }
}


ForecastContainer.contextTypes = {
   history: React.PropTypes.object.isRequired,
   location: React.PropTypes.object.isRequired,
   router: React.PropTypes.object.isRequired
}

export default ForecastContainer