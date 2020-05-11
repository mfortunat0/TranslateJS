import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [textArea_state1, setTextAreaState1] = useState("");
  const [textArea_state2, setTextAreaState2] = useState("");
  const [option_state1, setOptionState1] = useState("en");
  const [option_state2, setOptionState2] = useState("pt");

  const buttonHandle = (e) => {
    Axios.post(`http://localhost:3001/${option_state1}/${option_state2}`, {
      text: textArea_state1,
    })
      .then(function (response) {
        setTextAreaState2(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const option1Handle1 = (e) => {
    setOptionState1(e.target.value);
  };

  const option1Handle2 = (e) => {
    setOptionState2(e.target.value);
  };

  const textAreaHandle = (e) => {
    setTextAreaState1(e.target.value);
  };
  return (
    <div>
      <h1>Translate</h1>
      <section className="container">
        <div className="sub-container">
          <select onChange={(e) => option1Handle1(e)}>
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
          <textarea
            onChange={(e) => {
              textAreaHandle(e);
            }}
          />
        </div>
        <div className="sub-container">
          <select onChange={(e) => option1Handle2(e)}>
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>
          <textarea
            style={{ pointerEvents: "none" }}
            readOnly
            value={textArea_state2}
          />
        </div>
      </section>
      <div className="container">
        <button onClick={(e) => buttonHandle(e)}>Translate</button>
      </div>
    </div>
  );
}

export default App;
