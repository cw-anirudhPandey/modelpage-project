import React, { useState } from "react";
import { connect } from "react-redux";
import Popup from "./Popup";

// actions
import {
  changeSelectedCity,
  changeSelectedVersion,
  changeShowToolTip,
  changeSelectedPrice
} from "../actions/Actions";

function mapStateToProps(store) {
  return {
    city: store.selected.city,
    version: store.selected.version,
    cityList: store.list.city,
    versionList: store.list.version,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSelectedCity: function (selectedText) {
      dispatch(changeSelectedCity(selectedText));
    },
    changeSelectedVersion: function (selectedText) {
      dispatch(changeSelectedVersion(selectedText));
    },
    changeShowToolTip: function (showToolTip) {
      dispatch(changeShowToolTip(showToolTip));
    },
    changeSelectedPrice: function (selectedVersion, selectedCity) {
      dispatch(changeSelectedPrice(selectedVersion, selectedCity));
    }
  };
}

const SelectionPopup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const list = props.type === "City" ? props.cityList : props.versionList;
  const title = `Select ${props.type ? props.type : "City"}`;
  
  const changeToolTipStatus = () => {
    props.changeShowToolTip(true);
    setTimeout(() => {
      props.changeShowToolTip(false);
    }, 5000);
  };

  const handleChange = (selectedText) => {
    if (props.type === "City") {
      props.changeSelectedCity(selectedText);
      changeToolTipStatus();
    } else if (props.type === "Version") {
      props.changeSelectedVersion(selectedText);
    }
    props.changeSelectedPrice(props.version, props.city);
    setIsOpen(false);
  };

  const renderList = list.map((element, index) => {
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
    <div className="selection-popup">
      <h4>
        {props.type}: <span>{props.type === "City" ? props.city : props.version}</span>
      </h4>
      <button onClick={() => setIsOpen(true)}>Select {props.type} <i className="arrow right" /></button>
      {isOpen ? (
        <Popup
          status={isOpen}
          changeIsOpen={setIsOpen}
          title={title}
        >
          <ul>{renderList}</ul> 
        </Popup>
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPopup);
