import React, { useState } from "react";
import Image from "./Image";
import Popup from "./Popup";
import { connect } from "react-redux";

import { changeSelectedCity, changeShowToolTip, changeSelectedPrice } from "../actions/Actions";

function mapStateToProps(store) {
  return {
    city: store.selected.city,
    cityList: store.list.city,
    version: store.selected.version,
    showToolTip: store.showToolTip,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSelectedCity: function (selectedText) {
      dispatch(changeSelectedCity(selectedText));
    },
    changeShowToolTip: function (showToolTip) {
      dispatch(changeShowToolTip(showToolTip));
    },
    changeSelectedPrice: function (selectedVersion, selectedCity) {
      dispatch(changeSelectedPrice(selectedVersion, selectedCity));
    }
  };
}

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const title = `Select ${props.type ? props.type : "City"}`;

  const changeToolTipStatus = () => {
    props.changeShowToolTip(true);
    let timerId = setTimeout(() => {
      props.changeShowToolTip(false);
    }, 5000);

    return (() => {
      if(timerId)
        clearTimeout(timerId);
    })
  };

  const handleChange = (selectedText) => {
    if (props.type === "City") {
      props.changeSelectedCity(selectedText);
      props.changeSelectedPrice(props.version, props.city);
      changeToolTipStatus();
    }
    setIsOpen(false);
  };

  const renderList = props.cityList.map((element, index) => {
    return (
      <li
        style={{ cursor: "pointer" }}
        key={index}
        value={element}
        onClick={() => handleChange(element)}
      >
        {element}
      </li>
    );
  });

  return (
    <React.Fragment>
      <span 
        onClick={() => setIsOpen(true)}
        className="tooltip nav-icon"
      >
        <Image
          width={"20"}
          height={"20"}
          url={"https://www.flaticon.com/svg/static/icons/svg/67/67347.svg"}
        />
        {props.showToolTip ? (
          <span className="tooltiptext">{props.city}</span>
        ) : null}
      </span>

      {isOpen ? (
        <Popup status={isOpen} changeIsOpen={setIsOpen} title={title}>
          <ul>{renderList}</ul>
        </Popup>
      ) : null}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
