import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

<<<<<<< HEAD
=======
const divStyle = {
  backgroundColor: "grey",
  width: "300pt",
  height: "50pt",
  cursor: "pointer",
};

>>>>>>> ac04194c480c9fcc1de7c8dd79da4ee477dd6ac4
const SurveyButton = props => {
  const handleClick = () => {
    console.log("survey " + props.name + " clicked");
  };

  return (
<<<<<<< HEAD
  <React.Fragment>
      <div className="p2 flex-item" onClick={handleClick}>
        <Link to={`/survey/` + props.name}>
        <button type="button" className="btn btn-success btn-lg" >
        {props.name}</button>
        </Link>
     </div>
     <br/>
  </React.Fragment>
=======
    <div style={divStyle} onClick={handleClick}>
      <Link to={`/survey/` + props.name}>{props.name}</Link>
    </div>
>>>>>>> ac04194c480c9fcc1de7c8dd79da4ee477dd6ac4
  );
};

export default SurveyButton;
