import React, {PropTypes} from 'react'
import {Button,FormGroup, FormControl} from 'react-bootstrap'

export default function LocationSearchBox(props) {
    return (
        <FormGroup>
            <FormControl type="text" placeholder="Search" />
            <Button bsStyle="success" type="submit">Submit</Button>
        </FormGroup>
    )
}