import React from 'react';
import MainNavbar from './MainNavbar'

function Main(props) {
  return(
      <div>
        <MainNavbar/>
        {props.children}
      </div>
  )

}

//ESLint react/prop-types  props validation rule
Main.propTypes = {
   children: React.PropTypes.object
}

export default Main