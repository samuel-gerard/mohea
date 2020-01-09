const defaultTab = {
  'head': [],
  'body': [],
  'foot': []
}
const initState = {
  'defaultTab': defaultTab,
  'nbCol': 1,
  classes: [],
  'tableau': {
    'head': [],
    'body': [],
    'foot': [],
  },
  'caption': '',
  'name': '',
}

function rootReducer(state = initState, payload) {
  let newState = Object.assign({}, state);
  switch (payload.type) {
    case "DELETE_COL":
      const nbCol = state.nbCol;
      if (nbCol <= 1) {
        return state;
      }

      for (let [key, value] of Object.entries(newState.tableau)) {
        value.forEach(el => {
          el.splice(payload.col, 1);
        });
      }

      return {
        ...state,
        nbCol: state.nbCol - 1,
        tableau: {
          ...state.tableau,
          head: newState.tableau.head,
          body: newState.tableau.body,
          foot: newState.tableau.foot
        }
      }
    case "ADD_COL":
      for (let [key, value] of Object.entries(newState.tableau)) {
        value.map(row => {
          row.splice(parseInt(payload.idx, 10) + 1, 0, '');
          return row
        })
      }

      return {
        ...state,
        nbCol: state.nbCol + 1,
        tableau: newState.tableau
      }
    case "DELETE_ROW":
      newState.tableau[payload.typeTable].splice(payload.row, 1);
      return {
        ...state,
        tableau: {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable]
        }
      }
    case "ADD_ROW":
      const tab = []
      for (var i = 0; i < state.nbCol; i++) {
        tab.push('');
      }

      newState.tableau[payload.typeTable].splice(parseInt(payload.idx, 10) + 1, 0, tab);
      return {
        ...state,
        tableau: {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable]
        }
      }
    case "UPDATE_CAPTION":
      return {
        ...state,
        caption: payload.caption
      }
    case "UPDATE_NAME":
      return {
        ...state,
        name: payload.name
      }
    case "UPDATE_VALUE":
      newState.tableau[payload.typeTable][payload.row][payload.col] = payload.value;
      return {
        ...state,
        tableau: {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable],
        }
      }
    case "RESET_TABLE":
      return {
        'defaultTab': defaultTab,
        'nbCol': 1,
        'tableau': {
          'head': [],
          'body': [],
          'foot': [],
        },
        classes: [],
        'caption': '',
        'name': '',
      }
    case "IMPORT_TABLE":
      return {
        ...state,
        tableau: payload.data
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
    default:
      return state;
  }
}

export default rootReducer;