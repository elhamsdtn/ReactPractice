import React from "react";
import PropTypes from "prop-types";

function Heading(props) {
  return <h1> {props.children} </h1>;
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
