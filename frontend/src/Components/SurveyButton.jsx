import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const divStyle = {
  backgroundColor: "grey",
  width: "300pt",
  height: "50pt",
  cursor: "pointer",
};

const SurveyButton = props => {
  const handleClick = () => {
    console.log("survey " + props.name + " clicked");
  };

  return (
    <div style={divStyle} onClick={handleClick}>
      <Link to={`/survey/` + props.name}>{props.name}</Link>
    </div>
  );
};

export default SurveyButton;
