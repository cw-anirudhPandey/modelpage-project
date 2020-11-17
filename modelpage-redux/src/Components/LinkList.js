import React from "react";
import Link from "./Link";

const LinkList = (props) => {
  const linksList = props.listOfLinks.map((link, index) => {
    return <Link link={link} key={index} />;
  });
  return <div>{linksList}</div>;
};

export default LinkList;
