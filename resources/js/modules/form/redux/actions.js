/* ===============================================
* FUNCTIONS TO ADD
=============================================== */

export const addNewItem = (element) => ({
    type: "ADD_ITEM",
    element: element
});

export const addFocus = (element) => ({
    type: "ADD_FOCUS",
    element: element
});

/* ===============================================
* FUNCTIONS TO DELETE
=============================================== */

export const deleteItem = (element) => ({
    type: "DELETE_ITEM",
    element: element
});

export const resetForm = () => ({
    type: "RESET_FORM",
});

export const undoAction = () => ({
    type: "UNDO_ACTION"
})

export const redoAction = () => ({
    type: "REDO_ACTION"
})

/* ===============================================
* FUNCTIONS TO UPDATE
=============================================== */

export const updateElement = (element, id) => ({
    type: "UPDATE_ITEM",
    element: element,
    id: id
});

export const addOption = (element, option) => ({
    type: "ADD_OPTION",
    element: element,
    option: option
});

export const updateOption = (element, option, value) => ({
    type: "UPDATE_OPTION",
    element: element,
    option: option,
    value: value
});

export const updateName = (name) => ({
    type: "UPDATE_NAME",
    name: name,
});

export const duplicateItem = (element) => ({
    type: "DUPLICATE_ITEM",
    element: element
});

export const moveDown = (element) => ({
    type: "MOVE_DOWN",
    element: element
});

export const moveUp = (element) => ({
    type: "MOVE_UP",
    element: element
});


/* ===============================================
* FUNCTIONS ABOUT PROJECTS
=============================================== */

export const loadForm = (form, name) => ({
    type: "LOAD_FORM",
    form: form,
    name: name
});
