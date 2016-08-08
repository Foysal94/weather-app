import React, {Component} from 'react';
import {Navbar, NavbarHeader, NavbarBrand, NavbarCollapse} from 'react-bootstrap';
import {default as Search} from './LocationSearchBox'
import styles from '../scss/components/MainNavbar.scss'

export default class MainNavbar extends Component {

   render() {
      return(
          <Navbar fixedTop className={styles.navbarColour} >
             <NavbarBrand pullLeft  >
                <a href='#' className={styles.Brand}>Weather-app</a>
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
