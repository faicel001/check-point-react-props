import React from "react";
import PropTypes from "prop-types";   
const Welcome = (props) => {
 console.log(props.fullName)
  return (
  <div>
    {props.children}<br/>
    <button onClick={()=>props.handleName(props.fullName)} >click me!</button>
  </div>
 );
};
Welcome.defaultProps ={
  fullName:'anonymos',
  bio:'empty',
  profession:'empty'
 };
Welcome.propTypes={
  fullName:PropTypes.string
};
export default Welcome;