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

export const addNewRow = (idx) => {
  return {
    type: "ADD_ROW",
    typeTable: 'head',
    idx: idx
  }
}

export const addNewCol = (idx) => ({
  type: "ADD_COL",
  idx: idx
});
