import React from "react";
import Image from './Image';

const Link = ({link}) => {
  return (
    <span className="link">
      <Image
        url={link.imgUrl}
        alt={"Car"}
        height={15}
        width={15}
      />
    <a href={link.href} className="link-title">
      {link.title}
    </a>
    </span>
  );
};

export default Link;
