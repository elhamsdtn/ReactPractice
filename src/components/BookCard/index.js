import React from 'react';

function BookCard(props) {

    return (
      <div key={props.id} className="bookCard">
        {props.imgUrl && (
          <img src={props.imgUrl} alt={props.title} />
        )}
        <h4><a href={props.link}>{props.title}</a></h4>
        <p>{props.description}</p>
        <p><strong>Categories: {props.categories}</strong></p>
      </div>
    );

}

export default BookCard;
