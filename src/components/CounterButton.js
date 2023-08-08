import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function CounterButton() {

  const [clickAmount, setclickAmount] = useState(0);

  return (
    <button 
      className="CounterButton"
      >
    You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;