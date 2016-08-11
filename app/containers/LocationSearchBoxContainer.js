import React, {Component} from 'react'
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
			pathName:'/forecast/' + searchLocation, 
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
			location = {this.state.location} />  
		)
  
   }
}

LocationSearchBoxContainer.contextTypes = {
	history: React.PropTypes.object,
	location: React.PropTypes.object,
	router: React.PropTypes.object.isRequired
}

export default LocationSearchBoxContainer

