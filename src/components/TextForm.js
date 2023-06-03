import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function TextForm(props) {
  const [Text, setText] = useState("Enter text here");

  // Text="New text"  ---> Wrong way to change the text!!!
  // setText("New text")  ---> Correct way to change the text!!!

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("Uppercase button was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Upper case was clicked", "success");
  };

  const handleLowerCaseClick = () => {
    let newText1 = Text.toLowerCase();
    setText(newText1);
    props.showAlert("Lower case was clicked", "success");
  };
  const copyToClipboard = () => {
    copy(Text);
    alert(`You have copied "${Text}"`);
  };

  const HandleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear text was clicked", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0B2447" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0B2447" : "white",
              color: props.mode === "dark" ? "white" : "#0B2447",
            }}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className={`btn btn-${props.mode} mx-2`}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          onClick={handleLowerCaseClick}
          className={`btn btn-${props.mode} mx-2`}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          onClick={copyToClipboard}
          className={`btn btn-${props.mode} mx-2`}
        >
          Copy to Clipboard
        </button>
        <button
          type="button"
          onClick={HandleClearText}
          className={`btn btn-${props.mode} mx-2`}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#0B2447" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {Text.length} character
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
