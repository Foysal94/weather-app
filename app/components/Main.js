import React, {Component} from 'react';
import {Navbar, NavbarHeader, NavbarBrand, NavbarCollapse} from 'react-bootstrap';
import {default as Search} from './LocationSearchBox'


export default class Main extends Component{

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <Navbar fixedTop >
                <NavbarBrand pullLeft>
                    <a href="#">Weather-app</a>
                </NavbarBrand>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <Search/>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}