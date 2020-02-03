import React from "react";

class Element extends React.Component {

  state = {
    elements: [
      { id: 1, name: "Text", tag: "p", className:"moheaText", content: "My New Text MODIFIER" },
      { id: 2, name: "Title", tag: "h1", className:"moheaTitle", content: "My New Title" },
      { id: 3, name: "Legend", tag: "legend", className:"moheaLegend", type: "" },
      { id: 4, name: "Submit", tag: "input", className:"moheaSubmit", type: "submit", value: "Send my new Form" },
      { id: 5, name: "Text Input", tag: "input", className:"moheaTextInput", type: "text", label:"My New Text Input", required: "", placeholder: "My placeholder" },
      { id: 6, name: "Text Area", tag: "textarea", className:"moheaTextArea", label:"My New Text Area", rows: 3, col: 10, required: "", placeholder: "My placeholder" },
      { id: 7, name: "Select", tag: "select", className:"moheaSelect", label:"My New Select", title: "Options", required: "", options: [
        {tag: "option", value: "first", content: "My First Option"},
        {tag: "option", value: "deux", content: "My Second Option"}
      ]},
      { id: 8, name: "Date", tag: "input", className:"moheaDate", label:"My New Date", type: "date", required: "", placeholder: "12/02/2020" },
      { id: 9, name: "Check Box", tag: "div", className:"moheaCheckbox", label:"My New Check Box", required: "", options:[
        { tag: "input", type: "checkbox", label: "My first Option" }
      ]},
      { id: 10, name: "Radio Button", tag: "div", className:"moheaRadiobutton", label:"My New Radio Button", required: "", options: [
        { tag: "input", type: "radio", label: "My first Option" }
      ]},
      { id: 11, name: "Email", tag: "input", className:"moheaEmail", label:"My Email", type: "email", pattern: "", required: "", placeholder: "My placeholder" },
      { id: 12, name: "Link", tag: "input", className:"moheaLink", label:"My Link", type: "url", required: "", placeholder: "My placeholder" },
      { id: 13, name: "Password", tag: "input", className:"moheaPassword", label:"My Password", type: "password", required: "", placeholder: "My placeholder" },
      { id: 14, name: "Phone", tag: "input", className:"moheaPhone", label:"My Phone Number", type: "tel", pattern: "", required: "", placeholder: "My placeholder" }
    ],
    countElements: 0,
  };



  newElement(element)
  {
    element.id = this.state.countElements
    var count = this.state.countElements
    count = count + 1
    this.setState({countElements: count})
    console.log(element)
    this.props.onAddElement(element)
  }


  render() {
    return (
      <div className="elements_box">
        <h2>Elements choice</h2>
        <div className="element_list">
          <div className="list_1">
            {this.state.elements.map((element, i) => (
              <button
                key={i}
                className="element_item"
                type="button"
                onClick={() => this.newElement(element)}
                // onClick={() => this.props.onAddElement(element)}
                // onAddElement(<Text function={'create'} >)
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

export default Element;
