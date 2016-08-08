import React, {PropTypes} from 'react'
import {Button,FormGroup, FormControl} from 'react-bootstrap'
var styles = {
  marginLeft: 20
};

export default function LocationSearchBox(props) {
    return (
        <FormGroup>
            <FormControl type="text" placeholder="Search"  />
            <Button bsStyle="success" type="submit" style={styles} >Submit</Button>
        </FormGroup>
    )
}