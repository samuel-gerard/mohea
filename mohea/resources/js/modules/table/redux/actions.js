export const deleteCol = (idx) => {
  return {
    type: "DELETE_COL",
    col: idx
  }
}

export const deleteRow = (type, idx) => {
  return {
    type: "DELETE_ROW",
    typeTable: type,
    row: idx
  }
}

/* ===============================================
* FUNCTIONS TO ADD
=============================================== */

export const addNewRow = (items) => {
  return {
    type: "ADD_ROW",
    typeTable: 'head',
    items: items
  }
}

export const addNewCol = () => ({
  type: "ADD_COL",
});
