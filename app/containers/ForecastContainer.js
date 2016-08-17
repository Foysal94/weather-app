import React, {Component} from 'react'
import Forecast from '../components/Forecast'
import Helpers from '../Utilities/OpenWeatherAPI';
import Details from '../components/Details';

class ForecastContainer extends Component {

   constructor(props,context) {
      super(props, context)
      this.state = ({
         fiveDayForecast: [],
         location: this.props.params.location,
         dayForecast: undefined
      })
      console.log("Constructor dayForecast: " + JSON.stringify(this.state.dayForecast,null, ' '))
      this.handleDayClick = this.handleDayClick.bind(this)

   }

   handleDayClick(dayForecast) {
      let searchLocation = this.state.location
      let query = {
         location: searchLocation,
         dayForecast : dayForecast
      }

      this.setSate({
         dayForecast: dayForecast
      })

      this.context.router.push({
         pathname:'/forecast/' + searchLocation + '/details/' + dayForecast.unixTimeStamp,
         query
      })
      

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
             <Details  location = {this.state.location}
                       dayForecast={this.props.location.query.dayForecast  }/>
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