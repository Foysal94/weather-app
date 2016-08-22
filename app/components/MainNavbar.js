import React from 'react';
import {Navbar, NavbarBrand} from 'react-bootstrap';
import {Link} from 'react-router'

import {default as SearchBoxContainer} from '../containers/LocationSearchBoxContainer'
import styles from '../styles/components/Navbar.css'

function MainNavbar() {
  return(
      <Navbar fixedTop className={styles.navbarColour} >
        <NavbarBrand pullLeft  >
          <Link to='/' className={styles.Brand}>Weather-app</Link>
        </NavbarBrand>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <SearchBoxContainer parent='MainNavbar'/>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
  )

}


export default MainNavbar