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
      newState.menu.splice(payload.idx, 1)

      return {
        ...state,
        menu: [
          ...newState.menu
        ]
      }
    case "ADD_ITEM":
      const item = Object.assign({}, initItem);

      if(payload.parent_idx < 0) {
        return {
          ...state,
          menu: [
            ...state.menu,
            item
          ]
        }
      }

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
      const parent_idx = parseInt(payload.parent_idx, 10)
      const idx = parseInt(payload.idx, 10);
      if(parent_idx < 0) {
        newState.menu[idx].value = payload.value;
      }
      else {
        newState.menu[parent_idx].children[idx].value = payload.value;
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
          index: payload.idx,
          parent_index: payload.parent_idx,
        }
      }
    case "UPDATE_INPUT_STYLE":
      newState.menu[payload.idx] = {
        ...newState.menu[payload.idx],
        style: payload.cell
      }

      return {
        ...state,
        menu: [
          ...newState.menu
        ]
      }
    case "UDPATE_INPUT_OPTIONS":
      newState.menu[payload.idx] = {
        ...newState.menu[payload.idx],
        [payload.key]: payload.value
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