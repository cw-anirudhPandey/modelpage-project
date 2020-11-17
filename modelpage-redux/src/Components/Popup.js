import React from "react";
import "../css/styles.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <h1 style={{ alignContent: "center" }}>{props.title}</h1>
        {props.children}
        <button
          onClick={() => {
            props.changeIsOpen(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
