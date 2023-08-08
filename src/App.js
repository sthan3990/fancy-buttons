import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import React, { useState } from "react";

function App() {
  const [light, setLight] = useState("off");

  const dark = (light === 'off') ? 'dark' : '';

  return (
    <div className={`App ${dark}`}>
      <AngryButton />
      <CounterButton  />
      <LightSwitchButton 
        light={light}
        setLight={setLight}
      />
      <TextRepeaterButton />
    </div>
  );
}

export default App;
