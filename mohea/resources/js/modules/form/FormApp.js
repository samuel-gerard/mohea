import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";
import Edition from "./components/Edition";
import Element from "./components/Element";

class FormApp extends React.Component {

  state = {
    usedElements: [
    ],
    focus: ''
  };

  handleAddElement(element)
  {
    const usedElements = [...this.state.usedElements];
    usedElements.push(element);
    this.setState({usedElements});
  }

  handleAddFocus(element)
  {
    this.setState({focus: element});
  }

  render() {
    return (
      <div className="App">
        <h1>Your Form</h1>
        <div className="container_app">
          <Element onAddElement={this.handleAddElement.bind(this)} />
          <Form usedElements={this.state.usedElements} onFocusElement={this.handleAddFocus.bind(this)} />
          <Edition focusedElement={this.state.focus} />
        </div>
      </div>
    );
  }

}

const rootElement = document.getElementById("app-form");
ReactDOM.render(<FormApp />, rootElement);