import React from "react";
import Image from "./Image";
import Navigation from "./Navigation";
import "../css/styles.css";

const Header = () => {
  return (
    <div className="Rectangle">
      <h1 style={{display: "inline-block"}}>
        <Image
          url={
            "https://pbs.twimg.com/profile_images/1103195268177117184/pk2eYxu4.png"
          }
          alt={"Logo"}
          height={25}
          width={25}
        />{" "}
        Carwale
        
      </h1>
      <Navigation type={"City"} />
    </div>
  );
};

export default Header;
