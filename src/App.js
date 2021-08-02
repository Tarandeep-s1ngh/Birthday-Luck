import "./styles.css";
import React, { useState } from "react";

let dateInput = "";
let luckyNo = 0;

const happyGifDiv = (
  <img
    alt="happyGif"
    src="https://media.giphy.com/media/ZGBQhaRTHyWtRVn1Xx/source.gif"
    width="300px"
    height="250px"
    style={{ paddingBottom: "1rem" }}
  />
);

const sadGifDiv = (
  <img
    alt="sadGif"
    src="https://media.giphy.com/media/YqW6x1rVpPYpPbOgmO/source.gif"
    width="300px"
    height="250px"
    style={{ paddingBottom: "1rem" }}
  />
);

export default function App() {
  const [displayResult, setdisplayResult] = useState(["", ""]);

  function checkBtnHandler(e) {
    e.preventDefault();

    const dateArray = dateInput.split("-");
    let sum = 0;
    dateArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });

    if (sum % Number(luckyNo) === 0) {
      setdisplayResult(["WOW!! Your Birthday is Lucky!", happyGifDiv]);
    } else {
      setdisplayResult(["Oops! Your Birthday is not lucky!", sadGifDiv]);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <p
          style={{
            fontSize: "4em",
            margin: "0",
            fontWeight: "bold",
            paddingBottom: "10px"
          }}
        >
          Is Your Birthday Lucky?
        </p>
        <span>
          <a className="link" href="#mainSection">
            scroll down to checkout
          </a>
        </span>
      </div>

      <section id="mainSection" className="secton">
        <div id="alertBox">
          <div className="notice">
            <strong>Privacy Notice!</strong>
            <br /> We are not storing your data.
          </div>
        </div>

        <h2>Enter your birthdate and lucky number to check...</h2>
        <form onSubmit={checkBtnHandler}>
          <label htmlFor="birthdate">Enter your birthdate:</label>
          <input
            type="date"
            required
            id="datePicker"
            onChange={(e) => {
              dateInput = e.target.value;
            }}
          ></input>

          <label htmlFor="luckyNo">Enter your lucky number:</label>
          <input
            type="number"
            id="luckyNo"
            onChange={(e) => {
              luckyNo = e.target.value;
            }}
          ></input>

          <button type="submit">check</button>
        </form>

        <div>
          <div className="output">{displayResult[0]}</div>
          {displayResult[1]}
        </div>

        <footer>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Tarandeep-s1ngh">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://twitter.com/Tarandeep_s1ngh">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/in/tarandeep-s1ngh/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://tarandeep-singh.netlify.app/">
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
          </ul>
          <div>
            <span style={{ fontSize: "0.9em" }}>
              Made with ❤ by Tarandeep Singh
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
}
