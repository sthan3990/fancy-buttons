import React, { useState } from "react";

function LightSwitchButton(props) {

  const handleClick = () => {
    props.setLight(props.light === "on" ? "off" : "on");
  }

  return (
    <button 
      className="LightSwitchButton"
      onClick={() => handleClick()}
    >
      {props.light === "on" && <span><i>💡</i> I'm on!</span>}
      {props.light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;