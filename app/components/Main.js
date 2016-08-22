import React, {Component} from 'react';
import MainNavbar from './MainNavbar'

function Main(props) {
  return(
      <div>
        <MainNavbar/>
        {props.children}
      </div>
  )

}


export default Main