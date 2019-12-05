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

export const addNewRow = (type, idx) => ({
    type: "ADD_ROW",
    typeTable: type,
    idx: idx
});

export const addNewCol = (idx) => ({
  type: "ADD_COL",
  idx: idx
});

export const updateValue = (type, val, row, col) => ({
  type: "UPDATE_VALUE",
  typeTable: type,
  value: val,
  row: row,
  col: col,
});