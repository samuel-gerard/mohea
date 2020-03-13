import { clone } from "ramda";

const initState = {
    name: '',
    elementsChoices: [
        { name: "Title", tag: "h1", content: "My new title" },
        { name: "Text", tag: "p", content: "My new text" },
        { name: "Submit", tag: "input", className:"moheaSubmit", type: "submit", value: "Submit" },
        { name: "Text input", tag: "input", className:"moheaTextInput", type: "text", label:"My new text input", required: "required", placeholder: "My placeholder" },
        { name: "Text area", tag: "textarea", className:"moheaTextArea", label:"My new text area", rows: 3, col: 10, required: "required", placeholder: "My placeholder" },
        { name: "Select", tag: "select", className:"moheaSelect", label:"My new select", title: "Options", required: "required", options: [
        ]},
        { name: "Date", tag: "input", className:"moheaDate", label:"My new date", type: "date", required: "required", placeholder: "12/02/2020" },
        { name: "Check box", tag: "div", className:"moheaCheckbox", label:"My new check box", required: "", options:[
        ]},
        { name: "Radio button", tag: "div", className:"moheaRadiobutton", label:"My new radio button", required: "required", options: [
        ]},
        { name: "Email", tag: "input", className:"moheaEmail", label:"My email", type: "email", pattern: "", required: "required", placeholder: "My placeholder" },
        { name: "Link", tag: "input", className:"moheaLink", label:"My link", type: "url", required: "required", placeholder: "My placeholder" },
        { name: "Password", tag: "input", className:"moheaPassword", label:"My password", type: "password", required: "required", placeholder: "My placeholder" },
        { name: "Phone", tag: "input", className:"moheaPhone", label:"My phone number", type: "tel", pattern: "", required: "required", placeholder: "My placeholder" }
    ],
    elementsUsed: [],
    focus: -1,
    lastState: {},
    nextState: {},
}


function rootReducer(state = initState, payload) {
    let newState = Object.assign({}, state);
    const lastState = clone(state);

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
            ],
            lastState: lastState,
              nextState: {}
          };

      case "UPDATE_NAME":
        return {
          ...state,
          name: payload.name ? payload.name : '',
          lastState: lastState,
              nextState: {}
        }

      case "LOAD_FORM":
        return {
          ...state,
          elementsUsed: payload.form,
          name: payload.name ? payload.name : '',
          lastState: lastState,
              nextState: {}
        }
          
      case "ADD_FOCUS":
          return {
            ...state,
            focus: payload.element,
            lastState: lastState,
              nextState: {}
          };

      case "RESET_FORM":
          return {
            ...state,
            elementsUsed: [],
            focus: -1,
            lastState: lastState,
              nextState: {}
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
          ],
          lastState: lastState,
              nextState: {}
        };

        case "UPDATE_ITEM":
          let newElement = Object.assign({}, payload.element);
          newState.elementsUsed[payload.element.id] = newElement
          return {
            ...state,
            elementsUsed: [
              ...newState.elementsUsed
            ],
            lastState: lastState,
              nextState: {}
          };
          
        case "ADD_OPTION":
          let option = Object.assign({}, payload.option)
          let options = payload.element.options.slice()
          options.push(option)
          newState.elementsUsed[payload.element.id].options = options
          return {
            ...state,
            elementsUsed: [
              ...newState.elementsUsed
            ],
            lastState: lastState,
              nextState: {}
          };

        case "UPDATE_OPTION":
          let optionToUpdate = Object.assign({}, payload.option)
          let optionsToUpdate = payload.element.options.slice()
          optionToUpdate.label = payload.value
          optionsToUpdate[payload.option.id] = optionToUpdate
          newState.elementsUsed[payload.element.id].options = optionsToUpdate
          return {
            ...state,
            elementsUsed: [
              ...newState.elementsUsed
            ],
            lastState: lastState,
              nextState: {}
          };

        case "DUPLICATE_ITEM":
          let duplicateElem = Object.assign({}, payload.element);
          duplicateElem.id = newState.elementsUsed.length
          newState.elementsUsed.push(duplicateElem)
          return {
            ...state,
            elementsUsed: [
              ...newState.elementsUsed
            ],
            lastState: lastState,
              nextState: {}
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
              ],
              lastState: lastState,
              nextState: {}
            }
          }else{
            return {
              ...state,
              lastState: lastState,
              nextState: {}
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
              ],
              lastState: lastState,
              nextState: {}
            }
          }else{
            return {
              ...state,
              lastState: lastState,
              nextState: {}
            }
          }

          case "UNDO_ACTION":
            if(state.lastState && Object.values(state.lastState).length > 0) {
              return {
                ...state.lastState,
                nextState: state
              }
            } else return newState

          case "REDO_ACTION":
            if(state.nextState && Object.values(state.nextState).length > 0) {
              if(state.nextState.nextState && Object.values(state.nextState.nextState).length > 0) {
                return {
                  ...state.nextState,
                  nextState: state.nextState.nextState,
                }
              } else return state.nextState
            } else return newState
      default:
        return state;
    }
  }



export default rootReducer;