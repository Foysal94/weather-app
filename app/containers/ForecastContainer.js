import React, {Component} from 'react'
import Forecast from '../components/Forecast'
import Helpers from '../Utilities/OpenWeatherHelpers';
import Details from '../components/Details';

class ForecastContainer extends Component {

   constructor(props,context) {
      super(props, context)
      this.state = ({
         fiveDayForecast: [],
         location: this.props.params.location,

      })
      this.handleDayClick = this.handleDayClick.bind(this)
      this.returnDetailsComponentQuery = this.returnDetailsComponentQuery.bind(this)

   }

   returnDetailsComponentQuery(dayForecast) {
     let stringDate = dayForecast.date.format("dddd, MMMM Do")
     let query = {
       date: stringDate,
       minTemp: dayForecast.minTemp,
       maxTemp: dayForecast.maxTemp,
       humidity: dayForecast.humidity,
       description: dayForecast.description
     }
     console.log(query.date)
     return query
   }

   handleDayClick(dayForecast) {
     let searchLocation = this.state.location
     let query = this.returnDetailsComponentQuery(dayForecast)
     this.context.router.push({
         pathname:'/forecast/' + searchLocation + '/details/' + dayForecast.unixTimeStamp,
         query : query
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
             <Details location = {this.state.location}
                      minTemp = {this.props.location.query.minTemp}
                      maxTemp = {this.props.location.query.maxTemp}
                      humidity = {this.props.location.query.humidity}
                      description = {this.props.location.query.description}
                      date = {this.props.location.query.date}
             />
         )
      }

      else {
         return(
             <Forecast location = {this.state.location}
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