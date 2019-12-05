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
        value.forEach(el => {
          el.splice(action.row, 1);
        });
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
          console.log(row);
          row.splice(action.idx, 0, '');
          return row
        })
      }

      return {
        ...state,
        nbCol: state.nbCol + 1,
        tableau: newState.tableau
      }
    case "DELETE_ROW":
      newState.tableau[action.typeTable].splice(action.row, 1);
      return {
        ...state,
        tableau: {
          ...state.tableau,
          [action.typeTable]: newState.tableau[action.typeTable]
        }
      }
    case "ADD_ROW":
      const tab = []
      for (var i = 0; i < state.nbCol; i++) {
        tab.push('');
      }

      newState.tableau[action.typeTable].splice(action.idx, 0, tab);
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