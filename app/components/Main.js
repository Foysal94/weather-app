import React, {Component} from 'react';
import MainNavbar from './MainNavbar'


export default class Main extends Component{

   constructor(props) {
      super(props);
      this.props = props;
   }

   render() {
      return(
          <MainNavbar/>
      )
   }

}