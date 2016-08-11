import React, {Component} from 'react';
import MainNavbar from './Navbar'


class Main extends Component{

   constructor(props) {
      super(props);
      this.props = props;
   }

   render() {
      return(
          <div>
             <MainNavbar/>
             {this.props.children}
          </div>
      )
   }

}

export default Main