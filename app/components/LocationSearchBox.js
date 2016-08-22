import React, {PropTypes} from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import styles from '../styles/components/LocationSearchBox.css'

function getClass(parent) {
   let componentStyles;

   switch(parent) {
      case 'Home':
         componentStyles = styles.Home
         break;

      case 'MainNavbar':
         componentStyles = styles.MainNavbar
         break;
   }

   return componentStyles
}

function LocationSearchBox(props) {
   let ButtonStyles = getClass(props.callingParentComponent)

   return (
      <form onSubmit={props.onSubmitLocation} >
         <FormGroup>
            <FormControl
               type="text"
               placeholder="Search"
               value={props.location}
               onChange={props.onUpdateLocation}
               required='true' />
            <Button bsStyle="success" type="submit" className={ButtonStyles} >Get Weather</Button>
         </FormGroup>
      </form>
   )
}

LocationSearchBox.propTypes = {
   callingParentComponent: PropTypes.string,
   onUpdateLocation: PropTypes.func.isRequired,
   onSubmitLocation: PropTypes.func.isRequired,
   location: PropTypes.string.isRequired
};

export default LocationSearchBox