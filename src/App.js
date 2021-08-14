import "./styles.css";
import React, { useState } from "react";

const Dictionary = {
  "😀": "smile",
  "😁": "teeth",
  "😂": "crying smile",
  "🤣": "inclined crying smile",
  "😉": "blink eye",
  "😅": "aq smile"
};

export default function App() {
  var [input, setinput] = useState(0);

  function inputHandler(event) {
    var input = event.target.value;
    console.log(input);
    // var meaning = ;
    setinput(Dictionary[input]);
  }

  return (
    <div className="App">
      <input onChange={inputHandler}></input>
      <div> {input}</div>
    </div>
  );
}
