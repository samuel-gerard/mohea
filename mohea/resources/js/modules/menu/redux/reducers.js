const initItem = {
  'title': '',
  'link': '',
  'value': '',
  'target': '_self',
  'style': {},
  children: [],
}
const initState = {
  'classes': ['navbar', 'navbar-light bg-light'],
  'menu': [],
  'name': '',
  'inputSelected': {}
}

function rootReducer(state = initState, payload) {
  let newState = Object.assign({}, state);
  switch (payload.type) {
    case "DELETE_ITEM":
      console.log(payload.parent_idx < 0)
      if(payload.parent_idx < 0) {
        // If first level
        newState.menu.splice(payload.idx, 1)
      }
      else {
        // If second level
        newState.menu[payload.parent_idx].children.splice(payload.idx, 1)
      }

      return {
        ...state,
        inputSelected: {},
        menu: [
          ...newState.menu
        ]
      }
    case "ADD_ITEM":
      const item = Object.assign({}, initItem);

      // If first level
      if(payload.parent_idx < 0) {
        return {
          ...state,
          menu: [
            ...state.menu,
            item
          ]
        }
      }

      // If second level
      return {
        ...state,
        menu: [
          ...state.menu.slice(0, payload.parent_idx),
          {
            ...state.menu[payload.parent_idx],
            children: [
              ...newState.menu[payload.parent_idx].children,
              item
            ]
          },
          ...state.menu.slice(payload.parent_idx + 1)
        ]
      }
    case "UPDATE_NAME":
      return {
        ...state,
        name: payload.name
      }
    case "UPDATE_ITEM_VALUE":
      if(payload.parent_idx < 0) {
        // If first level
        newState.menu[payload.idx].value = payload.value;
      }
      else {
        // If second level
        newState.menu[payload.parent_idx].children[payload.idx].value = payload.value;
      }

      return {
        ...state,
        menu: [
          ...newState.menu,
        ]
      }
    case "RESET_MENU":
      return {
        'classes': ['navbar', 'navbar-light bg-light'],
        'menu': [],
        'name': '',
        'inputSelected': {}
      }
    case "UPDATE_CLASSES":
      const indexOfClasse = newState.classes.indexOf(payload.classe);

      // Here we search to know if we need to remove or to add the classe
      if(indexOfClasse >= 0) {
        newState.classes.splice(indexOfClasse, 1)
      } else {
        newState.classes.push(...[payload.classe])
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
          idx: payload.idx,
          parent_idx: payload.parent_idx,
        }
      }
    case "UPDATE_INPUT_STYLE":
      if(payload.parent_idx < 0) {
        // If first level
        newState.menu[payload.idx] = {
          ...newState.menu[payload.idx],
          style: payload.cell
        }
      } else {
        // If second level
        newState.menu[payload.parent_idx].children[payload.idx] = {
          ...newState.menu[payload.parent_idx].children[payload.idx],
          style: payload.cell
        }
      }

      return {
        ...state,
        menu: [
          ...newState.menu
        ]
      }
    case "UDPATE_INPUT_OPTIONS":
      if(payload.parent_idx < 0) {
        // If first level
        newState.menu[payload.idx] = {
          ...newState.menu[payload.idx],
        }
      } else {
        // If second level
        newState.menu[payload.parent_idx].children[payload.idx] = {
          ...newState.menu[payload.parent_idx].children[payload.idx],
          [payload.key]: payload.value
        }
      }

      return {
        ...state,
        menu: [
          ...newState.menu
        ]
      }
    default:
      return state;
  }
}

export default rootReducer;