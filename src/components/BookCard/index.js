import React from "react";
import PropTypes from "prop-types";

function BookCard(props) {
  return (
    <div key={props.id} className="bookCard">
      {props.imgUrl && <img src={props.imgUrl} alt={props.title} />}
      <h4>
        <a href={props.link}>{props.title}</a>
      </h4>
      {props.description && <p> {props.description} </p>}

      {props.categories && (
        <p>
          <strong> Categories: {props.categories} </strong>
        </p>
      )}
    </div>
  );
}

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default BookCard;
