export const deleteItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    item: item
  }
}

export const deleteCol = (col = {}) => {
  return {
    type: "REMOVE_COL",
    col: col
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
