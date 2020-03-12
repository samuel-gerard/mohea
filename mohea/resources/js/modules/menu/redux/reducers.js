import { clone } from "ramda";

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
  'inputSelected': {},
  'lastState': {}
}

function rootReducer(state = initState, payload) {
  let newState = Object.assign({}, state);
  const lastState = clone(state);
  switch (payload.type) {
    case "LOAD_MENU":

      return {
        ...state,
        'classes': payload.classes ? payload.classes : [],
        'menu': payload.menu,
        'name': payload.name ? payload.name : '',
        'lastState': lastState,
        'nextState': {}
      }
    case "DELETE_ITEM":
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
        ],
        'lastState': lastState,
        'nextState': {}
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
          ],
          'lastState': lastState,
          'nextState': {}
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
        ],
        'lastState': lastState,
        'nextState': {}
      }
    case "UPDATE_NAME":
      return {
        ...state,
        name: payload.name,
        'lastState': lastState,
        'nextState': {}
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
        ],
        'lastState': lastState,
        'nextState': {}
      }
    case "RESET_MENU":
      return {
        'classes': ['navbar', 'navbar-light bg-light'],
        'menu': [],
        'name': '',
        'inputSelected': {},
        'lastState': lastState,
        'nextState': {}
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
        ],
        'lastState': lastState,
        'nextState': {}
      }
    case "UPDATE_NBCOL":
      return {
        ...state,
        nbCol: payload.nbCol,
        'lastState': lastState,
        'nextState': {}
      }
    case "UPDATE_INPUT_SELECTED":
      if(!(payload.idx || payload.parent_idx)) {
        return {
          ...state,
          inputSelected: {},
          'lastState': lastState,
          'nextState': {}
        }
      }
      return {
        ...state,
        inputSelected: {
          idx: payload.idx,
          parent_idx: payload.parent_idx,
        },
        'lastState': lastState,
        'nextState': {}
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
        ],
        'lastState': lastState,
        'nextState': {}
      }
    case "UDPATE_INPUT_OPTIONS":
      if(payload.parent_idx < 0) {
        // If first level
        newState.menu[payload.idx] = {
          ...newState.menu[payload.idx],
          [payload.key]: payload.value
        }
      } else {
        // If second level
        newState.menu[payload.parent_idx].children[payload.idx] = {
          ...newState.menu[payload.parent_idx].children[payload.idx],
          [payload.key]: payload.value
        }
      }

      return {
        ...newState,
        menu: [
          ...newState.menu
        ],
        'lastState': lastState,
        'nextState': {}
      }
    case "UNDO_ACTION":
      if(state.lastState && Object.values(state.lastState).length > 0) {
        return {
          ...state.lastState,
          'nextState': state
        }
      } else return newState
    case "REDO_ACTION":
      if(state.nextState && Object.values(state.nextState).length > 0) {
        if(state.nextState.nextState && Object.values(state.nextState.nextState).length > 0) {
          return {
            ...state.nextState,
            'nextState': state.nextState.nextState,
          }
        } else return state.nextState
      } else return newState
    default:
      return state;
  }
}

export default rootReducer;