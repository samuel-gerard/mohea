const defaultTab = {
  'head': [],
  'body': [],
  'foot': []
}
const initState = {
  'defaultTab': defaultTab,
  'nbCol': 1,
  'classes': [],
  'tableau': {
    'head': [],
    'body': [],
    'foot': [],
  },
  'caption': '',
  'name': '',
  'inputSelected': {},
  'lastState': {}
}

function rootReducer(state = initState, payload) {
  let newState = Object.assign({}, state);
  switch (payload.type) {
    case "LOAD_TABLE":

      return {
        ...state,
        'classes': payload.classes ? payload.classes : [],
        'nbCol': payload.nbCol ? payload.nbCol : 0,
        'tableau': payload.tableau,
        'caption': payload.caption ? payload.caption : '',
        'name': payload.name ? payload.name : '',
        'lastState': {
          ...state
        }
      }
    case "DELETE_COL":
      const nbCol = state.nbCol;
      if (nbCol <= 1) {
        return state;
      }

      for (let [key, value] of Object.entries(newState.tableau)) {
        value.forEach(el => {
          let nbCol = 0
          let cellsMerged = false;

          for(var i = 0; i < el.length; i++) {
            console.log('----------- new boucle -------------', i)
            let colspan = el[i].colspan
            let payloadCol = parseInt(payload.col, 10);
            if(colspan && (nbCol <= payloadCol && payloadCol < nbCol + colspan)) {
              cellsMerged = true
              el[i].colspan -= 1;
              return;
            }
            if(nbCol === payloadCol) {
              console.log('nbcol', nbCol)
              console.log('paylo', payload.col)
              console.log('el', el[i])
              el.splice(i, 1);
              return;
            }
            nbCol += colspan ? colspan : 1
          }

          console.log(cellsMerged)
          if(!cellsMerged) {
            console.log('hey')
            console.log(nbCol)
            console.log(payload.col)
          }
        });
      }

      return {
        ...state,
        'nbCol': state.nbCol - 1,
        'tableau': {
          ...state.tableau,
          'head': newState.tableau.head,
          'body': newState.tableau.body,
          'foot': newState.tableau.foot
        },
        'lastState': {
          ...state
        }
      }
    case "ADD_COL":
      for (let [key, value] of Object.entries(newState.tableau)) {
        value.map(row => {
          row.splice(parseInt(payload.idx, 10) + 1, 0, { 'value': '' });
          return row
        })
      }

      return {
        ...state,
        'nbCol': state.nbCol + 1,
        'tableau': newState.tableau,
        'lastState': {
          ...state
        }
      }
    case "DELETE_ROW":
      newState.tableau[payload.typeTable].splice(payload.row, 1);
      return {
        ...state,
        'tableau': {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable]
        },
        'lastState': {
          ...state
        }
      }
    case "ADD_ROW":
      const tab = []
      for (var i = 0; i < state.nbCol; i++) {
        tab.push({ 'value': '' });
      }

      newState.tableau[payload.typeTable].splice(parseInt(payload.idx, 10) + 1, 0, tab);
      return {
        ...state,
        'tableau': {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable]
        },
        'lastState': {
          ...state
        }
      }
    case "UPDATE_CAPTION":
      return {
        ...state,
        'caption': payload.caption,
        'lastState': {
          ...state
        }
      }
    case "UPDATE_NAME":
      return {
        ...state,
        'name': payload.name,
        'lastState': {
          ...state
        }
      }
    case "UPDATE_VALUE":
      newState.tableau[payload.typeTable][payload.row][payload.col].value = payload.value;
      return {
        ...state,
        'tableau': {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable],
        },
        'lastState': {
          ...state
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
        'classes': [],
        'caption': '',
        'name': '',
        'inputSelected': {},
        'lastState': {
          ...state
        }
      }
    case "IMPORT_TABLE":
      return {
        ...state,
        'tableau': payload.data,
        'lastState': {
          ...state
        }
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
        ],
        'lastState': {
          ...state
        }
      }
    case "UPDATE_NBCOL":
      return {
        ...state,
        'nbCol': payload.nbCol,
        'lastState': {
          ...state
        }
      }
    case "UPDATE_INPUT_SELECTED":
      if(! (payload.typeTable || payload.row || payload.col) ) {
        return {
          ...state,
          'inputSelected': {}
        }
      }

      return {
        ...state,
        inputSelected: {
          type: payload.typeTable,
          row: payload.row,
          col: payload.col,
        }
      }
    case "UPDATE_INPUT_STYLE":
      newState.tableau[payload.typeTable][payload.row][payload.col] = {
        ...newState.tableau[payload.typeTable][payload.row][payload.col],
        'style': payload.cell
      }

      return {
        ...state,
        'tableau': {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable],
        },
        'lastState': {
          ...state
        }
      }
    case "MERGE_ROW":
      const colNext = newState.tableau[payload.typeTable][payload.row][payload.col + 1].colspan
      newState.tableau[payload.typeTable][payload.row].splice(payload.col + 1, 1);

      // Check if next col is already merged
      const colSpanNew = colNext ? colNext + payload.colspan : payload.colspan + 1

      // Update colspan
      newState.tableau[payload.typeTable][payload.row][payload.col] = {
        ...newState.tableau[payload.typeTable][payload.row][payload.col],
        'colspan': colSpanNew
      }

      return {
        ...state,
        'tableau': {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable],
        },
        'lastState': {
          ...state
        }
      }
    case "UNMERGE_ROW":
      const colspan = newState.tableau[payload.typeTable][payload.row][payload.col].colspan
      delete newState.tableau[payload.typeTable][payload.row][payload.col].colspan
      for(var i = 1; i < colspan; i++) {
        newState.tableau[payload.typeTable][payload.row].splice(parseInt(payload.col + 1, 10), 0, { 'value': '' })
      }

      return {
        ...state,
        'tableau': {
          ...state.tableau,
          [payload.typeTable]: newState.tableau[payload.typeTable],
        },
        'lastState': {
          ...state
        }
      }
    case "CANCEL_LAST_ACTION":
      return {
        ...state.lastState,
        'lastState': {
          ...newState
        }
      }
    default:
      return state;
  }
}

export default rootReducer;