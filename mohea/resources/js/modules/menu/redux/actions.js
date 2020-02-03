/* ===============================================
* FUNCTIONS TO DELETE
=============================================== */

export const deleteItem = (parent_idx, idx) => ({
  type: "DELETE_ITEM",
  parent_idx: parent_idx,
  idx: idx
})

export const resetMenu = () => ({
  type: "RESET_MENU"
})

/* ===============================================
* FUNCTIONS TO ADD
=============================================== */

export const addNewItem = (parent_idx, idx) => ({
    type: "ADD_ROW",
    parent_idx: parent_idx,
    idx: idx
});

export const saveMenu = () => ({
  type: "SAVE_MENU"
})


/* ===============================================
* FUNCTIONS TO UPDATE
=============================================== */

export const updateItemValue = (val, parent_idx, idx) => ({
  type: "UPDATE_ITEM_VALUE",
  value: val,
  parent_idx: parent_idx,
  idx: idx,
});

export const updateName = (val) => ({
  type: "UPDATE_NAME",
  name: val,
})

export const updateClasses = (data) => ({
  type: "UPDATE_CLASSES",
  classe: data,
})

export const updateInputSelected = (parent_idx, idx) => ({
  type: "UPDATE_INPUT_SELECTED",
  parent_idx: parent_idx,
  idx: idx,
})

export const updateInputStyle = (parent_idx, cell, row, col) => ({
  type: "UPDATE_INPUT_STYLE",
  cell: cell,
  parent_idx: parent_idx,
  idx: idx,
});