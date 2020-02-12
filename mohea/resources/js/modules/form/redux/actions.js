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


