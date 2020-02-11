/* ===============================================
* FUNCTIONS TO ADD
=============================================== */

export const addNewItem = (id, element) => ({
    type: "ADD_ITEM",
    id: id,
    element: element
});

export const deleteItem = (id) => ({
    type: "DELETE_ITEM",
    id: id
});



