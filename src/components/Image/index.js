import React from "react";
import PropTypes from "prop-types";
import styles from "./Image.module.css";

function Image(props) {
  return <img className={styles.image} src={props.src} alt={"Book"} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
