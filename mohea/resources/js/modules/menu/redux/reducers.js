const initState = {
  'initItem': {
    'value': '',
    'style': {},
    children: [],
  },
  'classes': [],
  'menu': [],
  'name': '',
  'inputSelected': {}
}

function rootReducer(state = initState, payload) {
  let newState = Object.assign({}, state);
  switch (payload.type) {
    case "DELETE_ITEM":
      return {
        ...state,
      }
    case "ADD_ITEM":
      return {
        ...state,
        nbCol: state.nbCol + 1,
        menu: newState.menu
      }
    case "UPDATE_NAME":
      return {
        ...state,
        name: payload.name
      }
    case "UPDATE_ITEM_VALUE":
      newState.menu[payload.index].value = payload.value;
      return {
        ...state,
        menu: {
          ...state.menu,
          [payload.typeTable]: newState.menu[payload.typeTable],
        }
      }
    case "RESET_MENU":
      return {
        'menu': {},
        'classes': [],
        'caption': '',
        'name': '',
        'inputSelected': {}
      }
    case "UPDATE_CLASSES":
      const indexOfClasse = newState.classes.indexOf(payload.classe);

      // Here we search to know if we need to remove or to add the classe
      if(indexOfClasse >= 0) {
        newState.classes.splice(indexOfClasse, 1)
      } else {
        newState.classes.push(payload.classe)
      }

      return {
        ...state,
        'classes': [
          ...newState.classes,
        ]
      }
    case "UPDATE_NBCOL":
      return {
        ...state,
        nbCol: payload.nbCol
      }
    case "UPDATE_INPUT_SELECTED":
      return {
        ...state,
        inputSelected: {
          index: payload.index,
          parent_index: payload.parent_index,
        }
      }
    case "UPDATE_INPUT_STYLE":
      newState.menu[payload.index] = {
        ...newState.menu[payload.index],
        style: payload.cell
      }
      return {
        ...state,
        menu: {
          ...state.menu,
          [payload.typeTable]: newState.menu[payload.typeTable],
        }
      }
    default:
      return state;
  }
}

export default rootReducer;