const initState = {
    name: '',
    elementsChoices: [
        { name: "Text", tag: "p", content: "My New Text" },
        { name: "Title", tag: "h1", content: "My New Title" },
        { name: "Submit", tag: "input", className:"moheaSubmit", type: "submit", value: "Send my new Form" },
        { name: "Text Input", tag: "input", className:"moheaTextInput", type: "text", label:"My New Text Input", required: false, placeholder: "My placeholder" },
        { name: "Text Area", tag: "textarea", className:"moheaTextArea", label:"My New Text Area", rows: 3, col: 10, required: false, placeholder: "My placeholder" },
        { name: "Select", tag: "select", className:"moheaSelect", label:"My New Select", title: "Options", required: false, options: [
          { id: 0, tag: "option", value: "first", content: "My First Option"},
          { id: 1,tag: "option", value: "deux", content: "My Second Option"}
        ]},
        { name: "Date", tag: "input", className:"moheaDate", label:"My New Date", type: "date", required: false, placeholder: "12/02/2020" },
        { name: "Check Box", tag: "div", className:"moheaCheckbox", label:"My New Check Box", required: false, options:[
          { id: 0, tag: "input", type: "checkbox", label: "My first Option" }
        ]},
        { name: "Radio Button", tag: "div", className:"moheaRadiobutton", label:"My New Radio Button", required: false, options: [
          { id: 0, tag: "input", type: "radio", label: "My first Option" }
        ]},
        { name: "Email", tag: "input", className:"moheaEmail", label:"My Email", type: "email", pattern: "", required: false, placeholder: "My placeholder" },
        { name: "Link", tag: "input", className:"moheaLink", label:"My Link", type: "url", required: false, placeholder: "My placeholder" },
        { name: "Password", tag: "input", className:"moheaPassword", label:"My Password", type: "password", required: false, placeholder: "My placeholder" },
        { name: "Phone", tag: "input", className:"moheaPhone", label:"My Phone Number", type: "tel", pattern: "", required: false, placeholder: "My placeholder" }
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
            focus: elem,
            elementsUsed: [
              ...newState.elementsUsed
            ]
          };

      case "UPDATE_NAME":
        return {
          ...state,
          name: payload.name ? payload.name : '',
        }

      case "LOAD_FORM":
        return {
          ...state,
          elementsUsed: payload.form,
          name: payload.name ? payload.name : '',
        }
          
      case "ADD_FOCUS":
          return {
            ...state,
            focus: payload.element
          };

      case "RESET_FORM":
          return {
            ...state,
            elementsUsed: [],
            focus: -1
          };

      case "DELETE_ITEM":

        const indexOfElement = newState.elementsUsed.indexOf(payload.element);

        if(indexOfElement >= 0) {
          newState.elementsUsed.splice(indexOfElement, 1)
        } else {
          newState.elementsUsed.push(...[payload.element])
        }
        return {
          ...state,
          focus: -1,
          elementsUsed: [
            ...newState.elementsUsed
          ]
        };

        case "UPDATE_ITEM":
          let newElement = Object.assign({}, payload.element);
          newState.elementsUsed[payload.element.id] = newElement
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

        case "MOVE_DOWN":
          let elementToMoveDown = Object.assign({}, payload.element);
          let elementToChange = newState.elementsUsed[elementToMoveDown.id - 1]
          if(typeof(elementToChange) !== 'undefined')
          {
            newState.elementsUsed[elementToMoveDown.id] = elementToChange
            newState.elementsUsed[elementToChange.id] = elementToMoveDown
            elementToMoveDown.id = elementToChange.id
            elementToChange.id = payload.element.id
            return {
              ...state,
              focus: elementToMoveDown,
              elementsUsed: [
                ...newState.elementsUsed
              ]
            }
          }else{
            return {
              ...state,
            }
          }

        case "MOVE_UP":
          let elementToMoveUp = Object.assign({}, payload.element);
          let elementToChangeDown = newState.elementsUsed[elementToMoveUp.id + 1]
          if(typeof(elementToChangeDown) !== 'undefined')
          {
            newState.elementsUsed[elementToMoveUp.id] = elementToChangeDown
            newState.elementsUsed[elementToChangeDown.id] = elementToMoveUp
            elementToMoveUp.id = elementToChangeDown.id
            elementToChangeDown.id = payload.element.id
            return {
              ...state,
              focus: elementToMoveUp,
              elementsUsed: [
                ...newState.elementsUsed
              ]
            }
          }else{
            return {
              ...state,
            }
          }

      default:
        return state;
    }
  }



export default rootReducer;