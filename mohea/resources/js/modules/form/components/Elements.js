import React from "react";

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements_1: [
        { id: 1, name: "Text", tag: "p", type: "" },
        { id: 2, name: "Title", tag: "h1", type: "" },
        { id: 3, name: "Label", tag: "label", type: "", for: "" },
        { id: 4, name: "Legend", tag: "legend", type: "" },
        { id: 5, name: "Submit", tag: "input", type: "submit" },
        { id: 6, name: "Button", tag: "button", type: "button" }
      ],
      elements_2: [
        { id: 7, name: "Input", tag: "input", type: "text" },
        { id: 8, name: "Text Area", tag: "textarea", required: "" },
        { id: 9, name: "Select", tag: "select", type: "" },
        { id: 10, name: "Date", tag: "input", type: "date" },
        { id: 11, name: "Check Box", tag: "input", type: "checkbox" },
        { id: 12, name: "Radio Button", tag: "input", type: "radio" }
      ],
      elements_3: [
        { id: 13, name: "Email", tag: "input", type: "email" },
        { id: 14, name: "Link", tag: "select", type: "" },
        { id: 15, name: "Password", tag: "input", type: "password" },
        { id: 16, name: "Phone", tag: "input", type: "number" }
      ]
    };
    this.handleAddElement = this.handleAddElement.bind(this);
  }

  handleAddElement(Element) {
    alert("ok");
    console.log(Element);
    return 0;
  }

  render() {
    return (
      <div className="elements_choice_box">
        <h2>Elements choice</h2>
        <div className="element_list">
          <div className="list_1">
            {this.state.elements_1.map(element => (
              <button
                className="element_item"
                type="button"
                onClick={() => this.handleAddElement(element)}
              >
                {element.name}
              </button>
            ))}
          </div>
          <div className="list_2">
            {this.state.elements_2.map(element => (
              <button
                className="element_item"
                type="button"
                onClick={() => this.handleAddElement()}
              >
                {element.name}
              </button>
            ))}
          </div>
          <div className="list_3">
            {this.state.elements_3.map(element => (
              <button
                className="element_item"
                type="button"
                onClick={() => this.handleAddElement()}
              >
                {element.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Elements;
