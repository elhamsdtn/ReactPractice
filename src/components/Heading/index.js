import React from "react";
import PropTypes from "prop-types";
import styles from "./Heading.module.css";

function Heading(props) {
  return (
    <div>
      <h1 className={styles.heading2}>{props.children}</h1>
    </div>
  );
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
