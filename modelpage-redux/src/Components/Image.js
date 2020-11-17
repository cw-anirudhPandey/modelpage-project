import React from "react";

const Image = (props) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      height={props.height}
      width={props.width}
    ></img>
  );
};

export default Image;
