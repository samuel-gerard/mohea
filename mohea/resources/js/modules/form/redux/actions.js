/* ===============================================
* FUNCTIONS TO ADD
=============================================== */

export const addNewItem = (element) => ({
    type: "ADD_ITEM",
    element: element
});

export const deleteItem = (element) => ({
    type: "DELETE_ITEM",
    element: element
});

export const duplicateItem = (element) => ({
    type: "DUPLICATE_ITEM",
    element: element
});

export const addFocus = (element) => ({
    type: "ADD_FOCUS",
    id: element.id
});

export const moveDown = (element) => ({
    type: "MOVE_DOWN",
    element: element
});

export const moveUp = (element) => ({
    type: "MOVE_UP",
    element: element
});

export const updateElement = (element, id) => ({
    type: "UPDATE_ITEM",
    element: element,
    id: id
});

export const resetForm = () => ({
    type: "RESET_FORM",
});




