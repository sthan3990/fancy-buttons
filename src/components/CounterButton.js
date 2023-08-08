import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function CounterButton() {

  const [clickAmount, setclickAmount] = useState(0);

  const handleClick = (amount) => {
    setclickAmount(clickAmount + amount);
  }

  return (
    <button
      className="CounterButton"
      onClick={() => handleClick(1)}
    >
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;