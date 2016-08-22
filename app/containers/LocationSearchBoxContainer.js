import React, {PropTypes,Component} from 'react'
import {default as SearchBox} from '../components/LocationSearchBox'

class LocationSearchBoxContainer extends Component {

   constructor(props, context) {
      super(props, context)

      this.state = {
         location: ''
      }
      this.handleSubmitLocation = this.handleSubmitLocation.bind(this)
      this.handleLocationUpdate = this.handleLocationUpdate.bind(this)

   }

   handleSubmitLocation(e) {
      e.preventDefault()
      let searchLocation = this.state.location
      this.setState({
         location: ''
      })
      this.context.router.push({
         pathname:'/forecast/' + searchLocation,
         query: {
            location: searchLocation
         }
      })
   }

   handleLocationUpdate(e) {
      this.setState({
         location: e.target.value
      })
   }

   render() {

      return (
         <SearchBox
            onUpdateLocation = {this.handleLocationUpdate}
            onSubmitLocation = {this.handleSubmitLocation}
            location = {this.state.location}
            callingParentComponent = {this.props.parent}/>
      )

   }
}

LocationSearchBoxContainer.contextTypes = {
   history: React.PropTypes.object.isRequired,
   location: React.PropTypes.object.isRequired,
   router: React.PropTypes.object.isRequired
}

LocationSearchBoxContainer.propTypes = {
   parent: PropTypes.string
}
export default LocationSearchBoxContainer

