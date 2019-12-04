const defaultTab = {
  'head': [],
  'body': [],
  'footer': []
}
const initState = {
  'defaultTab': defaultTab,
  'nbCol': 1,
  'tableau': {
    'head': [],
    'body': [],
    'footer': [],
  },
  'caption': '',
  'name': '',
}

function rootReducer(state = initState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "DELETE_COL":
      const nbCol = state.nbCol;
      if (nbCol <= 1) {
        return state;
      }

      for (let [key, value] of Object.entries(newState.tableau)) {
        value.map((row) => {
          delete row[nbCol - 1]
          return row
        })
      }

      return {
        ...state,
        nbCol: state.nbCol - 1,
        tableau: newState.tableau
      }
    case "ADD_ROW":
      const tab = {}
      for (var i = 0; i < state.nbCol; i++) {
        tab[i] = '';
      }

      newState.tableau[action.typeTable] = action.items.concat(tab)
      return {
        ...state,
        tableau: {
          ...state.tableau,
          head: newState.tableau.head
        }
      }
    case "ADD_COL":
      console.log('-----ADD COL', newState);
      for (let [key, value] of Object.entries(newState.tableau)) {
        value.map(row => {
          row[state.nbCol] = ''
          return row
        })
      }

      return {
        ...state,
        nbCol: state.nbCol + 1,
        tableau: newState.tableau
      }
    case "UPDATE_CAPTION":
      return {
        ...state,
        caption: action.caption
      }
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.name
      }
    case "RESET_TABLE":
      return initState;
    default:
      return state;
  }
}

export default rootReducer;