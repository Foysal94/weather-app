import React, {PropTypes} from 'react'

function puke(object) {
   return <pre>{JSON.stringify(object,null, ' ')}</pre>
   //<div>DATA: {puke(props)}</div>
}

function convertDayNumberToString(dayNumber) {
   var day;
   switch(dayNumber)
   {
      case 0:
         day = "Sunday"
         break;

      case 1:
         day = "Monday"
         break;

      case 2:
         day = "Tuesday"
         break;

      case 3:
         day = "Wednesday"
         break;

      case 4:
         day = "Thursday"
         break;

      case 5:
         day = "Friday"
         break;

      case 6:
         day = "Saturday"
         break;

      case 7:
         day = "Sunday"
         break;

      default:
         day = "ERROR"
         break;
   }

   return day;
}


function Forecast(props) {
   return (
       <div className='Forecast'>
          <h1>{props.location}</h1>
          <ul>
             {
                props.fiveDayForecast.map( function(dayForecast) {
                   return(
                       <li>
                         <pre>
                            {dayForecast.Date.format("dddd, MMMM Do")}
                         </pre>
                       </li>
                   )
                })
             }
          </ul>
       </div>
   )
}

Forecast.propTypes = {
   location: PropTypes.string.isRequired,
   fiveDayForecast: PropTypes.array
}

export default Forecast