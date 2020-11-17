import React from "react";
import "../css/styles.css";
import StarRating from "./StarRating";

const ModelDetails = (props) => {
  return (
    <div>
      <h2 className="center-container">{props.name}</h2>
      <p className="center-container">
        <StarRating rating={props.reviewDetails.rating} />
        <span className="rating-text">  {props.reviewDetails.totalReviewCount} Reviews</span>
      </p>
    </div>
  );
};

export default ModelDetails;
