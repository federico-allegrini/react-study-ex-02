import React from "react";
const char = (props) => {
  const charStyle = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    border: "2px solid white",
  };
  return (
    <div style={charStyle} onClick={props.clicked}>
      {props.char}
    </div>
  );
};
export default char;
