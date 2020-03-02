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

/* ===============================================
* FUNCTIONS TO UPDATE
=============================================== */

export const updateElement = (element, id) => ({
    type: "UPDATE_ITEM",
    element: element,
    id: id
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



