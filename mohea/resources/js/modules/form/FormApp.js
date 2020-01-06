import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";
import Edition from "./components/Edition";
import Elements from "./components/Elements";

function FormApp() {
  return (
    <div className="App">
      <h1>Form Builder</h1>
      <div className="container_app">
        <Elements />
        <Form />
        <Edition />
      </div>
      <script
        src="https://kit.fontawesome.com/1cd05482a2.js"
        crossorigin="anonymous"
      />
    </div>
  );
}

const rootElement = document.getElementById("app-form");
ReactDOM.render(<FormApp />, rootElement);