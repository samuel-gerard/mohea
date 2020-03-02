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

export const cancelAction = () => ({
  type: "CANCEL_LAST_ACTION"
})

/* ===============================================
* FUNCTIONS TO ADD
=============================================== */
export const loadMenu = (id, classes, menu, name) => ({
  type: "LOAD_MENU",
  id: id,
  classes: classes,
  menu: menu,
  name: name
})

export const addNewItem = (parent_idx) => ({
    type: "ADD_ITEM",
    parent_idx: parent_idx,
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

export const updateInputStyle = (cell, parent_idx, idx) => ({
  type: "UPDATE_INPUT_STYLE",
  cell: cell,
  parent_idx: parent_idx,
  idx: idx,
});

export const updateInputOptions = (type, value, parent_idx, idx) => ({
  type: "UDPATE_INPUT_OPTIONS",
  key: type,
  value: value,
  parent_idx: parent_idx,
  idx: idx,
})