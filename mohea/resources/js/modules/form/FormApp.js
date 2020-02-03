import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";
import Edition from "./components/Edition";
import Element from "./components/Element";


class FormApp extends React.Component {

  state = {
    usedElements: [
    ],
    focus: '',
    content: '',
  };

  handleAddElement(element)
  {
    const usedElements = [...this.state.usedElements];
    usedElements.push(element);
    this.setState({usedElements});
    // stocker dans le tableau l'ELEMENT correspondant // ou le COMPOSANT ?
    // créer nouvrau composant avec ID/key unique
  }

  handleAddFocus(element)
  {
    // FOCUS PAS BIEN MIT A JOUR QUAND PLUSIEURS MEMES ELEMENTS
    console.log(element)
    this.setState({focus: element});
  }

  handleUpdateElement(content)
  {
    // console.log(content)
    // chercher elem dans usedElements
    const usedElements = [...this.state.usedElements];
    usedElements[0].content = content
    this.setState({usedElements});

    // ICI !!! modifier focus avec nouvelle val + ajouter nouveau focus dans tab used
    // console.log(this.state.focus)

    // this.setState({usedElements});
    // console.log(this.state.usedElements)
    // console.log('OKOKOK = '+content)
  }

  render() {
    return (
      <div className="App">
        <h1>Your Form</h1>
        <div className="container_app">
          <Element onAddElement={this.handleAddElement.bind(this)} />
          <Form usedElements={this.state.usedElements} onFocusElement={this.handleAddFocus.bind(this)} />
          <Edition focusedElement={this.state.focus} onUpdateElement={this.handleUpdateElement.bind(this)} />
        </div>
      </div>
    );
  }

}

const rootElement = document.getElementById("app-form");
ReactDOM.render(<FormApp />, rootElement);