/* ===============================================
* FUNCTIONS TO DELETE
=============================================== */

export const deleteCol = (idx) => ({
  type: "DELETE_COL",
  col: idx
})

export const deleteRow = (type, idx) => ({
  type: "DELETE_ROW",
  typeTable: type,
  row: idx
})

export const resetTable = () => ({
  type: "RESET_TABLE"
})

export const undoAction = () => ({
  type: "UNDO_ACTION"
})

export const redoAction = () => ({
  type: "REDO_ACTION"
})

/* ===============================================
* FUNCTIONS TO ADD
=============================================== */
export const loadTable = (id, classes, nbCol, tableau, caption, name) => ({
  type: "LOAD_TABLE",
  id: id,
  classes: classes,
  nbCol: nbCol,
  tableau: tableau,
  caption: caption,
  name: name
})

export const addNewRow = (type, idx) => ({
    type: "ADD_ROW",
    typeTable: type,
    idx: idx
});

export const addNewCol = (idx) => ({
  type: "ADD_COL",
  idx: idx
});

export const importFile = (data) => ({
  type: "IMPORT_TABLE",
  data,
})

/* ===============================================
* FUNCTIONS TO UPDATE
=============================================== */
export const updateValue = (type, val, row, col) => ({
  type: "UPDATE_VALUE",
  typeTable: type,
  value: val,
  row: row,
  col: col,
});

export const updateName = (val) => ({
  type: "UPDATE_NAME",
  name: val,
})

export const updateCaption = (val) => ({
  type: "UPDATE_CAPTION",
  caption: val,
})

export const updateClasses = (data) => ({
  type: "UPDATE_CLASSES",
  classe: data,
})

export const updateNbCol = (nbCol) => ({
  type: "UPDATE_NBCOL",
  nbCol,
})

export const updateInputSelected = (type, row, col) => ({
  type: "UPDATE_INPUT_SELECTED",
  typeTable: type,
  row,
  col,
})

export const updateInputStyle = (type, cell, row, col) => ({
  type: "UPDATE_INPUT_STYLE",
  typeTable: type,
  cell: cell,
  row: row,
  col: col,
});

/* ===============================================
 * ABOUT CELLS MERGING
 =============================================== */
export const mergeRow = (type, colspan, row, col) => ({
  type: "MERGE_ROW",
  typeTable: type,
  colspan,
  row,
  col
})

export const unMergeRow = (type, row, col) => ({
  type: "UNMERGE_ROW",
  typeTable: type,
  row,
  col
})