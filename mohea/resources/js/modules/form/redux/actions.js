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

export const addFocus = (element) => ({
    type: "ADD_FOCUS",
    id: element.id
});

export const updateElement = (element, id) => ({
    type: "UPDATE_ELEMENT",
    element: element,
    id: id
});

