import React, {Component} from 'react';
import {Navbar, NavbarHeader, NavbarBrand, NavbarCollapse} from 'react-bootstrap';
import {default as SearchBoxContainer} from '../containers/LocationSearchBoxContainer'
import styles from '../scss/components/Navbar.scss'

class MainNavbar extends Component {

   render() {
      return(
             <Navbar fixedTop className={styles.navbarColour} >
                <NavbarBrand pullLeft  >
                   <a href='#' className={styles.Brand}>Weather-app</a>
                </NavbarBrand>
                <Navbar.Collapse>
                   <Navbar.Form pullRight>
                      <SearchBoxContainer />
                   </Navbar.Form>
                </Navbar.Collapse>
             </Navbar>


      )

   }
}


export default MainNavbar