import classNames from 'classnames'

const Helpers = {

  getWeatherIconClass: function(description) {
    let weatherClass = classNames({
      'wi': true,
      'wi-cloudy': description === 'Clouds',
      'wi-rain': description === 'Rain',
      'wi-cloud': description === 'Clear'

    })

    return weatherClass;
  }


}

export default Helpers