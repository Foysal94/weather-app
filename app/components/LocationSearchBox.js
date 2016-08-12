import React, {PropTypes, Component} from 'react'
import {Form, Button, FormGroup, FormControl} from 'react-bootstrap'

function LocationSearchBox(props) {
		return (
			
			<form onSubmit={props.onSubmitLocation} >
				<FormGroup>
					<FormControl 
						type="text" 
						placeholder="Search" 
						value={props.location}
						onChange={props.onUpdateLocation}
						required='true' />
					<Button bsStyle="success" type="submit" >Get Weather</Button>
				</FormGroup>
			</form>
		 )
}

LocationSearchBox.propTypes ={
	className: PropTypes.string,
	onUpdateLocation: PropTypes.func.isRequired,
	onSubmitLocation: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
};

export default LocationSearchBox