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
        const valueReordered = value.map(row => {
          delete row[action.col]
          const tmp = {};

          Object.keys(row).map( (el, idx) => {
            tmp[idx] = row[el];
          })
          return tmp
        })
        newState.tableau[key] = valueReordered;
      }

      return {
        ...state,
        nbCol: state.nbCol - 1,
        tableau: {
          ...state.tableau,
          head: newState.tableau.head,
          body: newState.tableau.body,
          footer: newState.tableau.footer
        }
      }
    case "ADD_COL":
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
    case "DELETE_ROW":
      console.log(newState.tableau[action.typeTable]);
      newState.tableau[action.typeTable].splice(action.row ,1);
      return {
        ...state,
        tableau: {
          ...state.tableau,
          [action.typeTable]: newState.tableau[action.typeTable]
        }
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