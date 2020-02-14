const initState = {
    'title': 'Mon nouveau formulaire',
    elementsChoices: [
        { name: "Text", tag: "p", content: "My New Text" },
        { name: "Title", tag: "h1", content: "My New Title" },
        { name: "Submit", tag: "input", className:"moheaSubmit", type: "submit", value: "Send my new Form" },
        { name: "Text Input", tag: "input", className:"moheaTextInput", type: "text", label:"My New Text Input", required: "", placeholder: "My placeholder" },
        { name: "Text Area", tag: "textarea", className:"moheaTextArea", label:"My New Text Area", rows: 3, col: 10, required: "", placeholder: "My placeholder" },
        { name: "Select", tag: "select", className:"moheaSelect", label:"My New Select", title: "Options", required: "", options: [
          {tag: "option", value: "first", content: "My First Option"},
          {tag: "option", value: "deux", content: "My Second Option"}
        ]},
        { name: "Date", tag: "input", className:"moheaDate", label:"My New Date", type: "date", required: "", placeholder: "12/02/2020" },
        { name: "Check Box", tag: "div", className:"moheaCheckbox", label:"My New Check Box", required: "", options:[
          { tag: "input", type: "checkbox", label: "My first Option" }
        ]},
        { name: "Radio Button", tag: "div", className:"moheaRadiobutton", label:"My New Radio Button", required: "", options: [
          { tag: "input", type: "radio", label: "My first Option" }
        ]},
        { name: "Email", tag: "input", className:"moheaEmail", label:"My Email", type: "email", pattern: "", required: "", placeholder: "My placeholder" },
        { name: "Link", tag: "input", className:"moheaLink", label:"My Link", type: "url", required: "", placeholder: "My placeholder" },
        { name: "Password", tag: "input", className:"moheaPassword", label:"My Password", type: "password", required: "", placeholder: "My placeholder" },
        { name: "Phone", tag: "input", className:"moheaPhone", label:"My Phone Number", type: "tel", pattern: "", required: "", placeholder: "My placeholder" }
    ],
    elementsUsed: [],
    focus: -1,
}


function rootReducer(state = initState, payload) {

    let newState = Object.assign({}, state);

    switch (payload.type) {

      case "ADD_ITEM":
          let elem = Object.assign({}, payload.element);
          elem.id = newState.elementsUsed.length
          newState.elementsUsed.push(elem)
          return {
            ...state,
            elementsUsed: [
              ...newState.elementsUsed
            ]
          };
          
      case "ADD_FOCUS":
          return {
            ...state,
            focus: payload.id
          };

      case "RESET_FORM":
          return {
            ...state,
            elementsUsed: [],
            focus: -1
          };

      case "DELETE_ITEM":

        const indexOfElement = newState.elementsUsed.indexOf(payload.element);
        console.log('okok' + indexOfElement)

        if(indexOfElement >= 0) {
          newState.elementsUsed.splice(indexOfElement, 1)
        } else {
          newState.elementsUsed.push(...[payload.element])
        }

        // newState.elementsUsed.splice(payload.element, 1)
        return {
          ...state,
          focus: -1,
          elementsUsed: [
            ...newState.elementsUsed
          ]
        };

        case "UPDATE_ITEM":
          let newElement = Object.assign({}, payload.element);
          newState.elementsUsed[payload.id] = newElement
          return {
            ...state,
            elementsUsed: [
              ...newState.elementsUsed
            ]
          };

        case "DUPLICATE_ITEM":
          let duplicateElem = Object.assign({}, payload.element);
          duplicateElem.id = newState.elementsUsed.length
          newState.elementsUsed.push(duplicateElem)
          return {
            ...state,
            elementsUsed: [
              ...newState.elementsUsed
            ]
          };

      default:
        return state;
    }
  }



export default rootReducer;