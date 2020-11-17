import React from "react";
import Image from "./Image";

const StarRating = (props) => {
  return Array(5)
    .fill()
    .map((el, index) => {
      return (
        <span key={index}>
          <Image
            url={
              Math.floor(props.rating) <= index
                ? "https://www.flaticon.com/svg/static/icons/svg/2164/2164323.svg"
                : "https://www.flaticon.com/svg/static/icons/svg/2164/2164197.svg"
            }
            alt={"Empty Star"}
            height={17}
            width={17}
          />
        </span>
      );
    });
};

export default StarRating;
