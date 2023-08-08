import React, { useState } from "react";

function CounterButton() {

  const [clickAmount, setclickAmount] = useState();

  return (
    <button className="CounterButton">
    You clicked me X amount of times
    </button>
  );
}

export default CounterButton;